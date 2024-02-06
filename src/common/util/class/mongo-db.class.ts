import { Model, QueryOptions } from 'mongoose';

export class MongoDB<T> {
  private readonly service: Model<T>;

  constructor(service: Model<T>) {
    this.service = service;
  }

  public async find(
    limit: number,
    skip: number,
    filter: object,
    select?: string | string[] | Record<string, number | boolean | object>,
    projection?: object | string | Array<any>,
    options?: object,
  ): Promise<Array<T>> {
    return await this.service
      .find(filter, projection, options)
      .select(select)
      .limit(limit)
      .skip(skip);
  }

  public async findPopulate(
    limit: number,
    skip: number,
    filter: object,
    path: string,
    select?: string | string[] | Record<string, number | boolean | object>,
    selectP?: any,
    model?: string,
    match?: any,
    projection?: object | string | Array<any>,
    options?: object,
  ): Promise<Array<T>> {
    return this.service
      .find(filter, projection, options)
      .select(select)
      .populate(path, selectP, model, match)
      .limit(limit)
      .skip(skip);
  }

  public async findOne(
    conditions: object,
    projection?: object | string | Array<string>,
    select?: string | string[] | Record<string, number | boolean | object>,
    options?: object,
  ): Promise<T> {
    return await this.service
      .findOne(conditions, projection, options)
      .select(select);
  }

  public async findById(
    id: string,
    projection?: object | string | Array<string>,
    select?: string | string[] | Record<string, number | boolean | object>,
    options?: object,
  ): Promise<T> {
    return await this.service.findById(id, projection, options).select(select);
  }

  public async findByIdAndUpdate(
    id: string | object,
    update: object,
    select?: string | string[] | Record<string, number | boolean | object>,
    options?: object,
  ): Promise<T> {
    return await this.service
      .findByIdAndUpdate(id, update, options)
      .select(select);
  }

  public async findByIdAndDelete(
    id: string,
    select?: string | string[] | Record<string, number | boolean | object>,
    options?: QueryOptions,
  ): Promise<T> {
    return await this.service.findByIdAndDelete(id, options).select(select);
  }

  public async count(): Promise<number> {
    return await this.service.collection.countDocuments();
  }

  public async create(
    docs: Array<object> | object,
    options?: object,
  ): Promise<Array<T>> {
    return await this.service.create(docs, options);
  }

  public async removeOne(
    filter: any,
    select?: string | string[] | Record<string, number | boolean | object>,
  ): Promise<Array<T>> {
    return await this.service.deleteOne(filter).select(select);
  }

  public async updateOne(
    filter: object,
    update: object | Array<object>,
    select?: string | string[] | Record<string, number | boolean | object>,
    options?: object,
  ): Promise<Array<T>> {
    return await this.service.updateOne(filter, update, options).select(select);
  }
}
