import { Model, QueryOptions, UpdateWriteOpResult } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { DeleteGroupsResult } from '@nestjs/microservices/external/kafka.interface';

/**
 * @Injectable() marks the class as a provider that can be managed by Nest IoC container.
 */
@Injectable()
export class OperationMongoDb<T> {
  /**
   * The constructor initializes the service and mongoDb properties.
   * @param service - A Mongoose model instance representing a MongoDB collection.
   */
  constructor(private readonly service: Model<T>) {}

  public async mongoDbFind(
    limit: number,
    skip: number,
    filter: object,
    select: string | string[] | Record<string, number | boolean | object>,
    sort: object,
    populate: {
      path?: string | string[];
      select?: string | any;
    } = {},
    options?: object,
  ): Promise<Array<T>> {
    let query = this.service.find(filter, options);

    if (select) {
      query = query.select(select);
    }

    if (sort) {
      query = query.sort(sort as any);
    }

    if (populate && populate.path) {
      query = query.populate(populate.path, populate.select) as any;
    }

    query = query.limit(limit).skip(skip);

    return await query.lean<Array<T>>(true);
  }

  public async mongoDbFindOne(
    conditions: object,
    projection?: object | string | Array<string>,
    select?: string | string[] | Record<string, number | boolean | object>,
    options?: object,
  ): Promise<T> {
    return await this.service
      .findOne(conditions, projection, options)
      .select(select)
      .lean<T>(true);
  }

  public async mongoDbFindById(
    id: string | number,
    projection?: object | string | Array<string>,
    select?: string | string[] | Record<string, number | boolean | object>,
    options?: object,
  ): Promise<T> {
    return await this.service
      .findById(id, projection, options)
      .select(select)
      .lean<T>(true);
  }

  public async mongoDbFindByIdAndUpdate(
    id: string | object,
    update: object,
    select?: string | string[] | Record<string, number | boolean | object>,
    options?: object,
  ): Promise<T> {
    return await this.service
      .findByIdAndUpdate(id, update, options)
      .select(select)
      .lean<T>(true);
  }

  public async mongoDbFindByIdAndDelete(
    id: number | string,
    select?: string | string[] | Record<string, number | boolean | object>,
    options?: QueryOptions,
  ): Promise<T> {
    return await this.service.findByIdAndDelete(id, options).select(select);
  }

  public async mongoDbCount(): Promise<number> {
    return await this.service.collection.countDocuments();
  }

  public async mongoDbCreate(
    docs: T | T[],
    options?: object,
  ): Promise<T[] | T> {
    return await this.service.create(docs, options);
  }

  public async mongoDbRemoveOne(
    filter: any,
    select?: string | string[] | Record<string, number | boolean | object>,
  ): Promise<DeleteGroupsResult> {
    return await this.service.deleteOne(filter).select(select);
  }

  public async mongoDbUpdateOne(
    filter: object,
    update: object | Array<object>,
    select?: string | string[] | Record<string, number | boolean | object>,
    options?: object,
  ): Promise<UpdateWriteOpResult> {
    return await this.service.updateOne(filter, update, options).select(select);
  }
}
