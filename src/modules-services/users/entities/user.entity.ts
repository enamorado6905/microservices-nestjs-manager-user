import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

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

  @Prop({ default: false })
  readonly isLocked: boolean;

  @Prop({ default: false })
  readonly isDisabled: boolean;

  @Prop({ default: false })
  readonly isVerified: boolean;
}

export const userSchema = SchemaFactory.createForClass(User);
