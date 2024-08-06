import { Inject, Injectable } from '@nestjs/common';
import { AbstractMethodOperation } from '../abstract-method-operation.class';
import { PaginateInterface } from '../../../interfaces/paginated.interface';
import { UserDocument } from '../../../../modules-services/users/entities/user.entity';
import { UserDataBaseEnum } from '../../../enum/data-base/user-data-base.enum';
import { OperationDB } from '../operation-db.class';
import { PaginationDto } from '../../../dto/list/pagination.dto';
import { FilterUserDto } from '../../../../modules-services/users/dto/filter-user.dto';
import { CreateUserDto } from '../../../../modules-services/users/dto/create-user.dto';
import { UpdateUserDto } from '../../../../modules-services/users/dto/update-user.dto';

/**
 * The `UsersService` class provides methods for managing users in the application.
 *
 * This class implements the `AbstractMethodOperation<User>` interface, which means
 * It provides methods for creating, retrieving, updating, and deleting `User` entities.
 *
 * The class provides the following methods:
 * - `find`: Retrieves a paginated list of users.
 * - `getById`: Retrieves a user by ID.
 * - `getOne`: Retrieves a user that matches the specified filter.
 * - `create`: Creates a new user.
 * - `update`: Updates a user.
 * - `delete`: Deletes a user.
 * - `total`: Retrieves the total number of users.
 *
 * Each method returns a `Promise` that resolves to the result of the operation. If an error
 * Occurs during the operation, the `Promise` is rejected with an `Error`.
 *
 * The `@Injectable()` decorator is used to mark the class as a provider that can be managed
 * By the NestJS dependency injection container.
 */
@Injectable()
export class UsersServiceClass
  implements AbstractMethodOperation<UserDocument>
{
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
    return await this.operationDB.findById(id);
  }
  public async getOne(filter: FilterUserDto): Promise<UserDocument> {
    return await this.operationDB.findOne(filter);
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
