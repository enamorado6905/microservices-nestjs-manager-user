import { Mongoose } from 'mongoose';
import {
  UserDocument,
  userSchema,
} from '../../../../modules-services/users/entities/user.entity';
import { UserDataBaseEnum } from '../../../enum/data-base/user-data-base.enum';
import { DataBaseEnum } from '../../../enum/data-base/data-base.enum';
import { OperationDB } from '../../class/operation-db.class';

export const usersProviders = [
  {
    provide: UserDataBaseEnum.MODEL,
    useFactory: (mongoose: Mongoose) => {
      return new OperationDB<UserDocument>(
        mongoose.model<UserDocument>(UserDataBaseEnum.NAME, userSchema),
      );
    },
    inject: [DataBaseEnum.MODEL],
  },
];
