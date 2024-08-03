import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument } from './entities/user.entity';
import { OperationDB } from '../../common/util/class/operation-db.class';
import { PaginationDto } from '../../common/dto/list/pagination.dto';
import { PaginateInterface } from '../../common/interfaces/paginated.interface';
import { AbstractMethodOperation } from '../../common/util/class/abstract-method-operation.class';
import { FilterUserDto } from './dto/filter-user.dto';
import { UserDataBaseEnum } from '../../common/enum/data-base/user-data-base.enum';

@Injectable()
export class UsersService implements AbstractMethodOperation<UserDocument> {
  constructor(
    @Inject(UserDataBaseEnum.MODEL)
    private readonly operationDB: OperationDB<UserDocument>,
  ) {}
  public async find(
    paginationArgsDto: PaginationDto,
  ): Promise<PaginateInterface<UserDocument>> {
    return await this.operationDB.find(paginationArgsDto);
  }
  public async getById(id: string | number): Promise<UserDocument> {
    const a = await this.operationDB.findById(id);
    console.log('aaaaaaaaaaaa', a);
    return a;
  }
  public async getOne(filter: FilterUserDto): Promise<UserDocument> {
    const result = await this.operationDB.findOne(filter);
    return result ? result[0] : null;
  }
  public async create(
    item: CreateUserDto,
  ): Promise<Array<UserDocument> | UserDocument> {
    return await this.operationDB.create(item as UserDocument);
  }
  public async update(id: string, item: UpdateUserDto): Promise<UserDocument> {
    return await this.operationDB.update(id, item);
  }
  public async delete(id: number | string): Promise<UserDocument> {
    return await this.operationDB.delete(id);
  }
  public async total(): Promise<number> {
    return await this.operationDB.count();
  }
}
