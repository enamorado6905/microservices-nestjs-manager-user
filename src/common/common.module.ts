import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommonService } from './common.service';
import { DatabaseModule } from '../data-base/database.module';
import configuration from './configuration/configuration';
import { UsersServiceClass } from './util/class/service/user.service.class';
import { usersProviders } from './util/constants/providers/user.providers';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      envFilePath: `.env`,
      load: [configuration],
      isGlobal: true,
      expandVariables: true,
    }),
  ],
  providers: [CommonService, UsersServiceClass, ...usersProviders],
  exports: [CommonService, UsersServiceClass],
})
export class CommonModule {}
