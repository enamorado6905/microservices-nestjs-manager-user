import { RpcException } from '@nestjs/microservices';
import { ExceptionClass } from '../util/class/exception.class';
import { ExceptionEnum } from '../enum/error/exception.enum';

function rpcException(message: string, exception: ExceptionClass) {
  throw new RpcException({ message, exception });
}

export function errorNotFoundElement(type: string, id: string) {
  return rpcException(
    `There is no ${type} with the ID ${id} in the DB.`,
    ExceptionEnum.NotFoundException,
  );
}

export function errorEmailNotRegistered(email: string) {
  return rpcException(
    `The email ${email} is not registered.`,
    ExceptionEnum.NotFoundException,
  );
}

export function errorUnauthorized() {
  return rpcException(
    `The email or password does not match.`,
    ExceptionEnum.UnauthorizedException,
  );
}

export function errorBadRequestPassword() {
  return rpcException(
    'The password does not match',
    ExceptionEnum.ConflictException,
  );
}

export function errorOperation(error: any) {
  return rpcException(`Failed to operation ${error.message}`, error.exception);
}
