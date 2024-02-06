import { Model, ObjectId, QueryOptions } from 'mongoose';

/**
 * TODO This method find entities
 * @param service
 * @param limit
 * @param skip
 * @param filter
 * @param select
 * @param projection
 * @param options
 * @return
 */
export const find = async (
  service: Model<any>,
  limit: number,
  skip: number,
  filter: object | ObjectId,
  select?: string | string[] | Record<string, number | boolean | object>,
  projection?: object | string | Array<any>,
  options?: object,
): Promise<any> => {
  return service
    .find(filter, projection, options)
    .select(select)
    .limit(limit)
    .skip(skip);
};

/**
 * TODO This method populate entities
 * @param service
 * @param limit
 * @param skip
 * @param filter
 * @param path
 * @param select
 * @param selectP
 * @param model
 * @param match
 * @param projection
 * @param options
 * @returns
 */
export const findPopulate = async (
  service: Model<any>,
  limit: number,
  skip: number,
  filter: object | ObjectId,
  path: string,
  select?: string | string[] | Record<string, number | boolean | object>,
  selectP?: any,
  model?: string,
  match?: any,
  projection?: object | string | Array<any>,
  options?: object,
): Promise<any> => {
  return service
    .find(filter, projection, options)
    .select(select)
    .populate(path, selectP, model, match)
    .limit(limit)
    .skip(skip);
};

/**
 * TODO This method find for query
 * @param service
 * @param conditions
 * @param projection
 * @param select
 * @param options
 * @returns
 */
export const findOne = async (
  service: Model<any>,
  conditions: object,
  projection?: object | string | Array<string>,
  select?: string | string[] | Record<string, number | boolean | object>,
  options?: object,
): Promise<any> => {
  return service.findOne(conditions, projection, options).select(select);
};

/**
 * TODO This method find for id
 * @param service
 * @param id
 * @param projection
 * @param select
 * @param options
 * @returns
 */
export const findById = async (
  service: Model<any>,
  id: string,
  projection?: object | string | Array<string>,
  select?: string | string[] | Record<string, number | boolean | object>,
  options?: object,
): Promise<any> => {
  return service.findById(id, projection, options).select(select);
};

/**
 * TODO This method update for id
 * @param service
 * @param id
 * @param update
 * @param select
 * @param options
 * @returns
 */
export const findByIdAndUpdate = async (
  service: Model<any>,
  id: string | object,
  update: object,
  select?: string | string[] | Record<string, number | boolean | object>,
  options?: object,
): Promise<any> => {
  return service.findByIdAndUpdate(id, update, options).select(select);
};

/**
 * TODO This method remove for id
 * @param service
 * @param id
 * @param select
 * @param options
 * @returns
 */
export const findByIdAndDelete = async (
  service: Model<any>,
  id: string,
  select?: string | string[] | Record<string, number | boolean | object>,
  options?: QueryOptions,
): Promise<any> => {
  return service.findByIdAndDelete(id, options).select(select);
};

/**
 * TODO This method return total entity
 * @param service
 * @returns
 */
export const count = async (service: Model<any>): Promise<number> => {
  return 0;
};

/**
 * TODO This method create
 * @param service
 * @param docs
 * @param options
 * @returns
 */
export const create = async (
  service: Model<any>,
  docs: Array<object> | object,
  options?: object,
): Promise<any> => {
  return await service.create(docs, options);
};

/**
 * TODO This method remove
 * @param service
 * @param filter
 * @param select
 * @returns
 */
export const removeOne = async (
  service: Model<any>,
  filter: any,
  select?: string | string[] | Record<string, number | boolean | object>,
): Promise<any> => {
  return service.deleteOne(filter).select(select);
};

/**
 * TODO This method updateOne
 * @param service
 * @param filter
 * @param update
 * @param select
 * @param options
 * @returns
 */
export const updateOne = async (
  service: Model<any>,
  filter: object,
  update: object | Array<object>,
  select?: string | string[] | Record<string, number | boolean | object>,
  options?: object,
): Promise<any> => {
  return service.updateOne(filter, update, options).select(select);
};
