import { ArgumentsHost, Catch, Logger } from '@nestjs/common';
import { BaseRpcExceptionFilter, RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class AllExceptionsFilter extends BaseRpcExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    // Log all exceptions for debugging
    this.logger.error(
      `Exception caught in microservice: ${exception instanceof Error ? exception.message : 'Unknown exception'}`,
    );

    // If it's not an RpcException, transform and handle it here
    const transformedException = this.transformException(exception);
    return super.catch(transformedException, host);
  }

  /**
   * Transforms non-RpcException exceptions into RpcException or a suitable format.
   * This method can be customized based on the types of exceptions you're dealing with.
   *
   * @param exception The exception to transform
   * @returns A transformed exception, suitable for RPC communication
   */
  private transformException(exception: unknown): RpcException {
    // Example transformation: wrap the original exception message in an RpcException
    const errorMessage =
      exception instanceof Error
        ? exception.message
        : 'An unknown error occurred';
    return new RpcException({
      message: errorMessage,
      status: 400,
      errorCode: 'NO_CODE_PROVIDED',
    });
  }
}
