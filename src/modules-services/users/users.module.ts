import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { CommonModule } from '../../common/common.module';

@Module({
  controllers: [UsersController],
  imports: [CommonModule, ConfigModule],
  providers: [UsersService],
})
export class UsersModule {}
