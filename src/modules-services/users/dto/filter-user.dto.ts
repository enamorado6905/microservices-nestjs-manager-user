import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class FilterUserDto {
  @IsOptional()
  @MaxLength(255)
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  readonly username?: string;

  @IsOptional()
  @IsString()
  @IsEmail()
  readonly email?: string;

  @IsOptional()
  @IsBoolean()
  readonly isLocked?: boolean;

  @IsOptional()
  @IsBoolean()
  readonly isDisabled?: boolean;

  @IsOptional()
  @IsBoolean()
  readonly isVerified?: boolean;
}
