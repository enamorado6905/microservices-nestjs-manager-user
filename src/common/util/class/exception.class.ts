import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Status } from '@grpc/grpc-js/build/src/constants';

@Injectable()
export class ExceptionClass {
  private readonly status: Status;
  private readonly message: string;
  private readonly extensions?: object;

  constructor(status: Status, message: string, extensions?: object) {
    this.status = status;
    this.message = message;
    this.extensions = extensions;
  }

  public rpcException() {
    const details = {
      code: this.status,
      message: this.message,
      extensions: this.extensions,
    };
    throw new RpcException({
      message: JSON.stringify(details),
      code: this.status,
    });
  }
}
