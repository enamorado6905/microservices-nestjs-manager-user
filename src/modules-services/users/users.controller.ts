import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersMsgEnum } from '../../common/enum/msg/users.enum';
import { PaginationDto } from '../../common/dto/list/pagination.dto';
import { FilterUserDto } from './dto/filter-user.dto';
import { FilterByIdUserDto } from './dto/filter-by-id.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern(UsersMsgEnum.CREATE)
  public async create(@Payload() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @MessagePattern(UsersMsgEnum.FIND)
  public async findAll(@Payload() paginationDto: PaginationDto) {
    return this.usersService.find(paginationDto);
  }

  @MessagePattern(UsersMsgEnum.FIND_ONE)
  public async findOne(@Payload() filter: FilterUserDto) {
    return this.usersService.getOne(filter);
  }

  @MessagePattern(UsersMsgEnum.FIND_BY_ID)
  public async findById(@Payload() filterByIdUserInput: FilterByIdUserDto) {
    return this.usersService.getById(filterByIdUserInput.id);
  }

  @MessagePattern(UsersMsgEnum.UPDATE)
  public async update(
    @Payload() updateUserDto: { id: string; item: UpdateUserDto },
  ) {
    return this.usersService.update(updateUserDto.id, updateUserDto.item);
  }

  @MessagePattern(UsersMsgEnum.DELETE)
  public async remove(@Payload() id: number | string) {
    return this.usersService.delete(id);
  }

  @MessagePattern(UsersMsgEnum.TOTAL)
  public async totalUser(): Promise<number> {
    return await this.usersService.total();
  }
}
