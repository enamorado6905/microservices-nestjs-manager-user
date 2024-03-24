import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';
import { ModulesServicesModule } from './modules-services/modules-services.module';
dotenv.config();

@Module({
  imports: [ModulesServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
