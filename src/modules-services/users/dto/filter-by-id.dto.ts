import { IsNotEmpty, IsString } from 'class-validator';

export class FilterByIdUserDto {
  @IsNotEmpty()
  @IsString()
  readonly id: string;
}
