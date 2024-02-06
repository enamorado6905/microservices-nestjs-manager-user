import * as mongoose from 'mongoose';
import { DataBaseEnum } from '../common/enum/data-base/data-base.enum';

export const databaseProviders = [
  {
    provide: DataBaseEnum.model,
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(process.env['DATABASE_MONGODB_URI']),
  },
];
