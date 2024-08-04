import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { UserEntityEnum } from '../../../common/enum/entity/user/user-language.enum';

// UserDocument is a type that represents a User document in MongoDB.
export type UserDocument = User & Document;

// @Schema() decorator marks the class as a Mongoose schema.
// The timestamps option tells Mongoose to automatically manage createdAt and updatedAt properties.
@Schema({ timestamps: true })
class User {
  @Prop({ required: true })
  readonly name: string;

  @Prop({ required: true })
  readonly surnames: string;

  @Prop({ required: true, unique: true })
  readonly email: string;

  @Prop({ required: true })
  readonly password: string;

  @Prop({
    required: true,
    enum: [
      UserEntityEnum.LANGUAGE_CHINESE,
      UserEntityEnum.LANGUAGE_ENGLISH,
      UserEntityEnum.LANGUAGE_FRENCH,
      UserEntityEnum.LANGUAGE_GERMAN,
      UserEntityEnum.LANGUAGE_ITALIAN,
      UserEntityEnum.LANGUAGE_PORTUGUESE,
      UserEntityEnum.LANGUAGE_SPANISH,
      // Add more languages as needed
    ],
    default: UserEntityEnum.LANGUAGE_ENGLISH, // Default language is English.
  })
  readonly language: string;

  @Prop({ default: false })
  readonly isLocked: boolean;

  @Prop({ default: false })
  readonly isDisabled: boolean;

  @Prop({ default: false })
  readonly isVerified: boolean;
}

// userSchema is a Mongoose schema generated from the User class.
export const userSchema = SchemaFactory.createForClass(User);
