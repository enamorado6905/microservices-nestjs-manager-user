import { Model } from 'mongoose';
import { MongoDB } from './mongo-db.class';

export class OperationDB<T> {
  private readonly service: Model<T>;
  private readonly mongoDb: MongoDB<T>;

  constructor(service: Model<T>) {
    this.service = service;
    this.mongoDb = new MongoDB<T>(this.service);
  }

  public async create(
    docs: Array<object> | object,
    options?: object,
  ): Promise<T> {
    const createdData = await this.mongoDb.create(docs, options);

    return !createdData ? createdData[0] : createdData[0];
  }

  public async findById(id: string): Promise<T | null> {
    const foundData = await this.mongoDb.findById(id);
    return foundData;
  }

  public async update(id: string, data: Partial<T>): Promise<T | null> {
    const updatedData = await this.mongoDb.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updatedData;
  }

  public async delete(id: string): Promise<T | null> {
    const deletedData = await this.mongoDb.findByIdAndDelete(id);
    return deletedData;
  }
}
