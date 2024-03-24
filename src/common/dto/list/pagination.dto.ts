import { IsBoolean, IsNumber, IsOptional } from 'class-validator';
import { SortOrder } from 'mongoose';

/**
 * Represents the pagination arguments for retrieving a list of items.
 */
export class PaginationDto {
  @IsOptional()
  @IsNumber()
  readonly limit?: number = 10;

  @IsOptional()
  @IsNumber()
  readonly page?: number = 0;

  @IsOptional()
  readonly query?: object;

  @IsOptional()
  readonly projection?: object;

  @IsOptional()
  readonly sort?:
    | string
    | { [key: string]: SortOrder | { $meta: any } }
    | [string, SortOrder][]
    | undefined
    | null;

  @IsOptional()
  readonly select?: Array<string> | string = [];

  @IsOptional()
  readonly paginated?: string;

  /**
   * Indicates whether pagination is enabled.
   * Default value: true
   */
  @IsBoolean()
  @IsOptional()
  readonly isPaginate?: boolean;
}
