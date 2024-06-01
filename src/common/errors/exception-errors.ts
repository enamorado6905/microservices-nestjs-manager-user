import { ObjectId } from 'mongoose';

export function rpcException(id: string | number | ObjectId) {
  return `No data found for id: ${id}`;
}

export function rpcExceptionUnauthorized() {
  return `Unauthorized`;
}

export function rpcExceptionNoDataFound(id: string | number | ObjectId) {
  return `No data found for id: ${id}`;
}

export function rpcExceptionFindOne() {
  return `Error find data`;
}

export function rpcExceptionCreatedData() {
  return `Error creating data`;
}

export function rpcExceptionFindData() {
  return `Error find data`;
}
