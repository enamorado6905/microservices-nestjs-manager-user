import { Mongoose } from 'mongoose';
import { UserDocument, userSchema } from './entities/user.entity';
import { UserDataBaseEnum } from '../../common/enum/data-base/user-data-base.enum';
import { DataBaseEnum } from '../../common/enum/data-base/data-base.enum';
import { OperationDB } from '../../common/util/class/operation-db.class';

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
