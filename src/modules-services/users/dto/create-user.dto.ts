import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MaxLength(255)
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  readonly surnames: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  readonly password: string;

  @IsNotEmpty()
  @IsString()
  readonly language: string;

  @IsOptional()
  @IsBoolean()
  readonly isLocked?: boolean;

  @IsOptional()
  @IsBoolean()
  readonly isDisabled: boolean;

  @IsOptional()
  @IsBoolean()
  readonly isVerified: boolean;
}
