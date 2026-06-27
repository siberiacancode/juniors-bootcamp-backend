import type { FastifyRequest } from 'fastify';

import { BadRequestException } from '@nestjs/common';
import { Args, Context, Query, Resolver } from '@nestjs/graphql';

import { DescribeContext } from '@/utils/decorators';
import { GqlAuthorizedOnly } from '@/utils/guards';
import { AuthService, BaseResolver } from '@/utils/services';

import type { User } from '../users';

import { PACKAGE_TYPES, POINTS } from './constants';
import {
  DeliveryOrderResponse,
  DeliveryOrdersResponse,
  DeliveryPackageTypesResponse,
  DeliveryPointsResponse
} from './delivery.model';
import { GetDeliveryOrderDto } from './dto';
import { DeliveryOrderService } from './modules';

@Resolver('📦 delivery query')
@DescribeContext('DeliveryQuery')
@Resolver()
export class DeliveryQuery extends BaseResolver {
  constructor(
    private readonly authService: AuthService,
    private readonly deliveryOrderService: DeliveryOrderService
  ) {
    super();
  }

  @Query(() => DeliveryPointsResponse)
  getDeliveryPoints(): DeliveryPointsResponse {
    return this.wrapSuccess({ points: POINTS });
  }

  @Query(() => DeliveryPackageTypesResponse)
  getDeliveryPackageTypes(): DeliveryPackageTypesResponse {
    return this.wrapSuccess({ packages: PACKAGE_TYPES });
  }

  @GqlAuthorizedOnly()
  @Query(() => DeliveryOrdersResponse)
  async getDeliveryOrders(
    @Context() context: { req: FastifyRequest }
  ): Promise<DeliveryOrdersResponse> {
    const token = context.req.headers.authorization.split(' ')[1];
    const decodedJwtAccessToken = (await this.authService.decode(token)) as User;

    if (!decodedJwtAccessToken) {
      throw new BadRequestException(this.wrapFail('Некорректный токен авторизации'));
    }

    const orders = await this.deliveryOrderService.find({
      $or: [
        { 'sender.phone': decodedJwtAccessToken.phone },
        { 'receiver.phone': decodedJwtAccessToken.phone }
      ]
    });

    return this.wrapSuccess({ orders });
  }

  @GqlAuthorizedOnly()
  @Query(() => DeliveryOrderResponse)
  async getDeliveryOrder(
    @Args() getDeliveryOrderDto: GetDeliveryOrderDto,
    @Context() context: { req: FastifyRequest }
  ): Promise<DeliveryOrderResponse> {
    const token = context.req.headers.authorization.split(' ')[1];
    const decodedJwtAccessToken = (await this.authService.decode(token)) as User;

    if (!decodedJwtAccessToken) {
      throw new BadRequestException(this.wrapFail('Некорректный токен авторизации'));
    }

    const order = await this.deliveryOrderService.findOne({
      _id: getDeliveryOrderDto.orderId,
      $or: [
        { 'sender.phone': decodedJwtAccessToken.phone },
        { 'receiver.phone': decodedJwtAccessToken.phone }
      ]
    });

    if (!order) {
      throw new BadRequestException(this.wrapFail('Заказ не найден'));
    }

    return this.wrapSuccess({ order });
  }
}
