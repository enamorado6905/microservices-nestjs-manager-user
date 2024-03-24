import { IsBoolean, IsNumber, IsOptional } from 'class-validator';

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
  readonly select?: string;

  @IsOptional()
  readonly sort?: object;

  @IsOptional()
  readonly populate?: object;

  /**
   * Indicates whether pagination is enabled.
   * Default value: true
   */
  @IsBoolean()
  @IsOptional()
  readonly isPaginate?: boolean;
}
