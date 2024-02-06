import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';
import { RabbitMqEnum } from './common/enum/msg/rabbit-mq.enum';

async function bootstrap() {
  try {
    const app = await NestFactory.createMicroservice(AppModule, {
      transport: Transport.RMQ,
      options: {
        urls: process.env['AMQP_URL'],
        queue: RabbitMqEnum.usersQueue,
      },
      abortOnError: true,
    });
    app.useGlobalFilters(new AllExceptionsFilter());
    await app.listen();
    Logger.log(`🚀  Server ready at ${RabbitMqEnum.usersQueue}`);
  } catch (error) {
    Logger.error(`❌  Error starting server, ${error}`);
    process.exit();
  }
}

bootstrap().catch();
