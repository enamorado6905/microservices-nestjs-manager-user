import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument } from './entities/user.entity';
import { PaginationDto } from '../../common/dto/list/pagination.dto';
import { PaginateInterface } from '../../common/interfaces/paginated.interface';
import { AbstractMethodOperation } from '../../common/util/class/abstract-method-operation.class';
import { FilterUserDto } from './dto/filter-user.dto';
import { UsersServiceClass } from '../../common/util/class/service/user.service.class';

@Injectable()
export class UsersService implements AbstractMethodOperation<UserDocument> {
  constructor(private readonly usersServiceClass: UsersServiceClass) {}
  public async find(
    paginationArgsDto: PaginationDto,
  ): Promise<PaginateInterface<UserDocument>> {
    return await this.usersServiceClass.find(paginationArgsDto);
  }

  public async getById(id: string | number): Promise<UserDocument> {
    return await this.usersServiceClass.getById(id);
  }
  public async getOne(filter: FilterUserDto): Promise<UserDocument> {
    return await this.usersServiceClass.getOne(filter);
  }
  public async create(
    item: CreateUserDto,
  ): Promise<Array<UserDocument> | UserDocument> {
    return await this.usersServiceClass.create(item as UserDocument);
  }
  public async update(id: string, item: UpdateUserDto): Promise<UserDocument> {
    return await this.usersServiceClass.update(id, item);
  }
  public async delete(id: number | string): Promise<UserDocument> {
    return await this.usersServiceClass.delete(id);
  }

  public async total(): Promise<number> {
    return await this.usersServiceClass.total();
  }
}
