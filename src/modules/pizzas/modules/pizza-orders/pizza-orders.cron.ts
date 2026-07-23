import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import { TransactionsService, TransactionStatus } from '@/modules/transactions';

import { PizzaStatus } from './pizza-orders.enums';
import { PizzaOrdersService } from './pizza-orders.service';

const NEXT_STATUS: Partial<Record<PizzaStatus, PizzaStatus>> = {
  [PizzaStatus.IN_PROCESSING]: PizzaStatus.WAITING_COURIER,
  [PizzaStatus.WAITING_COURIER]: PizzaStatus.ON_MY_WAY,
  [PizzaStatus.ON_MY_WAY]: PizzaStatus.SUCCESS
};

@Injectable()
export class PizzaOrdersCron {
  private readonly logger = new Logger(PizzaOrdersCron.name);

  constructor(
    private readonly pizzaOrdersService: PizzaOrdersService,
    private readonly transactionsService: TransactionsService
  ) {}

  @Cron(CronExpression.EVERY_MINUTE, { name: 'pizza-orders-kill-stale' })
  async killStaleOrders(): Promise<void> {
    const awaitingOrders = await this.pizzaOrdersService.findMany({
      status: PizzaStatus.AWAITING_PAYMENT,
      transactionId: { $ne: null }
    });

    if (!awaitingOrders.length) return;

    const transactionIds = awaitingOrders.map(({ transactionId }) => transactionId);

    const deadTransactions = await this.transactionsService.findMany({
      _id: { $in: transactionIds },
      status: TransactionStatus.FAILED
    });

    if (!deadTransactions.length) return;

    const deadIds = deadTransactions.map(({ _id }) => String(_id));

    const { deletedCount: deletedOrders } = await this.pizzaOrdersService.deleteMany({
      transactionId: { $in: deadIds },
      status: PizzaStatus.AWAITING_PAYMENT
    });

    const { deletedCount: deletedTransactions } = await this.transactionsService.deleteMany({
      _id: { $in: deadTransactions.map(({ _id }) => _id) }
    });

    this.logger.log(
      `PIZZA KILL STALE CRON: deleted ${deletedOrders ?? 0} orders, ${deletedTransactions ?? 0} transactions`
    );
  }

  @Cron(CronExpression.EVERY_MINUTE, { name: 'pizza-orders-progress' })
  async progressOrders(): Promise<void> {
    const orders = await this.pizzaOrdersService.findMany({
      status: { $in: Object.keys(NEXT_STATUS) as PizzaStatus[] }
    });

    const randomOrders = orders.filter(() => Math.random() < 0.3);
    if (!randomOrders.length) return;

    let updated = 0;

    for (const order of randomOrders) {
      const nextStatus = NEXT_STATUS[order.status];
      if (!nextStatus) continue;

      await this.pizzaOrdersService.updateById(order._id, {
        status: nextStatus,
        cancellable: false
      });
      updated += 1;
    }

    updated && this.logger.log(`PIZZA PROGRESS CRON: updated ${updated}`);
  }
}
