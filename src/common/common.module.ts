import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonService } from './common.service';
import { DatabaseModule } from '../data-base/database.module';
import configuration from './configuration/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
      load: [configuration],
      isGlobal: true,
      expandVariables: true,
    }),
    DatabaseModule,
  ],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
