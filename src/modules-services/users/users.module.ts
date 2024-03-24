import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CommonModule } from '../../common/common.module';
import { usersProviders } from './user.providers';
import { DatabaseModule } from '../../data-base/database.module';

@Module({
  controllers: [UsersController],
  imports: [DatabaseModule, CommonModule, ConfigModule],
  providers: [UsersService, ...usersProviders],
})
export class UsersModule {}
