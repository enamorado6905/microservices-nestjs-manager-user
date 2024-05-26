import { ObjectId } from 'mongoose';

export function rpcExceptionNoDataFound(id: string | number | ObjectId) {
  return `No data found for id: ${id}`;
}
