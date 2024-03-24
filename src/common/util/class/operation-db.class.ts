import { Model, QueryOptions, SortOrder, UpdateWriteOpResult } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { PaginationDto } from '../../dto/list/pagination.dto';
import { PaginationClass } from './pagination.class';
import { PaginateInterface } from '../../interfaces/paginated.interface';
import { DeleteGroupsResult } from '@nestjs/microservices/external/kafka.interface';

/**
 * @Injectable() marks the class as a provider that can be managed by Nest IoC container.
 */
@Injectable()
export class OperationDB<T> {
  /**
   * The constructor initializes the service and mongoDb properties.
   * @param service - A Mongoose model instance representing a MongoDB collection.
   */
  constructor(private readonly service: Model<T>) {}

  /**
   * create method is used to create new documents in the MongoDB collection.
   * @param docs - The document(s) to be created.
   * @param options - Optional settings.
   * @returns A promise that resolves to the created document(s).
   */
  public async create(
    docs: Array<object> | object,
    options?: object,
  ): Promise<T> {
    const createdData = await this.mongoDbCreate(docs, options);
    return !createdData ? createdData[0] : createdData[0];
  }

  public async find(
    paginationDto: PaginationDto,
    options?: any,
  ): Promise<PaginateInterface<T>> {
    const data = await this.mongoDbFind(
      paginationDto.limit,
      paginationDto.page,
      paginationDto.query,
      paginationDto.select,
      paginationDto.projection,
      paginationDto.sort,
      options,
    );
    const paginated = new PaginationClass(
      paginationDto.page,
      paginationDto.limit,
      data,
      await this.mongoDbCount(),
    );
    return paginated.paginated();
  }

  public async findById(id: string | number): Promise<T | null> {
    const foundData = await this.mongoDbFindById(id);
    return foundData;
  }

  public async findOne(filter: object): Promise<T | null> {
    const foundData = await this.mongoDbFindOne(filter);
    return foundData;
  }

  public async update(id: string, data: Partial<T>): Promise<T | null> {
    return await this.mongoDbFindByIdAndUpdate(id, data, {
      new: true,
    });
  }

  public async updateOne(
    filter: object,
    data: Partial<T>,
  ): Promise<UpdateWriteOpResult> {
    return await this.mongoDbUpdateOne(filter, data, {
      new: true,
    });
  }

  public async delete(id: number | string): Promise<T | null> {
    const deletedData = await this.mongoDbFindByIdAndDelete(id);
    return deletedData;
  }

  public async deleteOne(filter: object): Promise<DeleteGroupsResult> {
    return await this.mongoDbRemoveOne(filter);
  }

  public async count(): Promise<number | null> {
    return await this.mongoDbCount();
  }

  private async mongoDbFind(
    limit: number,
    skip: number,
    filter: object,
    select: string | string[] | Record<string, number | boolean | object>,
    projection: object | string | Array<any>,
    sort:
      | string
      | { [key: string]: SortOrder | { $meta: any } }
      | [string, SortOrder][]
      | undefined
      | null,
    populate: {
      path: string | string[];
      select?: string | any;
      model?: string | Model<T>;
      match?: any;
    },
    options?: object,
  ): Promise<Array<T>> {
    return await this.service
      .find(filter, projection, options)
      .select(select)
      .sort(sort)
      .populate(populate.path, populate.select, populate.model, populate.match)
      .limit(limit)
      .skip(skip);
  }

  private async mongoDbFindOne(
    conditions: object,
    projection?: object | string | Array<string>,
    select?: string | string[] | Record<string, number | boolean | object>,
    options?: object,
  ): Promise<T> {
    return await this.service
      .findOne(conditions, projection, options)
      .select(select);
  }

  private async mongoDbFindById(
    id: string | number,
    projection?: object | string | Array<string>,
    select?: string | string[] | Record<string, number | boolean | object>,
    options?: object,
  ): Promise<T> {
    return await this.service.findById(id, projection, options).select(select);
  }

  private async mongoDbFindByIdAndUpdate(
    id: string | object,
    update: object,
    select?: string | string[] | Record<string, number | boolean | object>,
    options?: object,
  ): Promise<T> {
    return await this.service
      .findByIdAndUpdate(id, update, options)
      .select(select);
  }

  private async mongoDbFindByIdAndDelete(
    id: number | string,
    select?: string | string[] | Record<string, number | boolean | object>,
    options?: QueryOptions,
  ): Promise<T> {
    return await this.service.findByIdAndDelete(id, options).select(select);
  }

  private async mongoDbCount(): Promise<number> {
    return await this.service.collection.countDocuments();
  }

  private async mongoDbCreate(
    docs: Array<object> | object,
    options?: object,
  ): Promise<Array<T>> {
    return await this.service.create(docs, options);
  }

  private async mongoDbRemoveOne(
    filter: any,
    select?: string | string[] | Record<string, number | boolean | object>,
  ): Promise<DeleteGroupsResult> {
    return await this.service.deleteOne(filter).select(select);
  }

  private async mongoDbUpdateOne(
    filter: object,
    update: object | Array<object>,
    select?: string | string[] | Record<string, number | boolean | object>,
    options?: object,
  ): Promise<UpdateWriteOpResult> {
    return await this.service.updateOne(filter, update, options).select(select);
  }
}
