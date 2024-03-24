import { UserDocument } from '../../modules-services/users/entities/user.entity';

export interface UserInterface extends UserDocument {
  _id: string;
  name: string;
  surnames: string;
  email: string;
  isLocked: boolean;
  isDisabled: boolean;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}
