import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersMsgEnum } from '../../common/enum/msg/users.enum';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern(UsersMsgEnum.CREATE)
  public async create(@Payload() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @MessagePattern(UsersMsgEnum.FIND)
  public async findAll() {
    return this.usersService.findAll();
  }

  @MessagePattern(UsersMsgEnum.FIND_ONE)
  public async findOne(@Payload() id: number) {
    return this.usersService.findOne(id);
  }

  @MessagePattern(UsersMsgEnum.FIND_BY_ID)
  public async findById(@Payload() id: number) {
    return this.usersService.findById(id);
  }

  @MessagePattern(UsersMsgEnum.UPDATE)
  public async update(@Payload() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  @MessagePattern(UsersMsgEnum.DELETE)
  public async remove(@Payload() id: number) {
    return this.usersService.remove(id);
  }
}
