import type { Document, QueryFilter } from 'mongoose';

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class BaseService<Doc extends Document> {
  constructor(private readonly model: Model<Doc>) {}

  create = this.model.create;
  insertMany = this.model.insertMany;
  find = this.model.find;
  findById = this.model.findById;
  findOne = this.model.findOne;
  updateOne = this.model.updateOne;
  updateMany = this.model.updateMany;
  findOneAndUpdate = this.model.findOneAndUpdate;
  delete = this.model.deleteOne;

  async findAndDelete(filter: QueryFilter<Doc>) {
    const documents = await this.model.find(filter);
    const deletedInfo = await this.model.deleteMany(filter);
    return { ...deletedInfo, documents };
  }

  total(...params: Parameters<typeof this.model.countDocuments>) {
    return this.model.countDocuments(...params);
  }
}
