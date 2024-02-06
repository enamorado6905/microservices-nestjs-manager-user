import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';
import { toNumber } from '../../helpers/cast.helper';
import { SortDescEnum } from '../../enum/system/sort.enum';

/**
 * Represents the pagination arguments for retrieving a list of items.
 */
export class PaginationArgsDto {
  /**
   * The number of items per page.
   * Default value: 10
   * Minimum value: 10
   */
  @Transform(({ value }) => toNumber(value, { default: 10, min: 10 }))
  @IsOptional()
  @IsNumber()
  readonly per_page?: number = 10;

  /**
   * The page number.
   * Default value: 0
   * Minimum value: 0
   */
  @Transform(({ value }) => toNumber(value, { default: 0, min: 0 }))
  @IsOptional()
  @IsNumber()
  readonly page?: number = 0;

  /**
   * The field to sort the items by.
   */
  @IsOptional()
  @IsString()
  sort_by?: string;

  /**
   * The creation date of the items.
   */
  @IsOptional()
  created_at?: any;

  /**
   * The last update date of the items.
   */
  @IsOptional()
  updated_at?: any;

  /**
   * The sorting order.
   * Default value: SortDescEnum.DESC
   */
  @IsString()
  @IsOptional()
  sort_desc?: SortDescEnum.DESC | SortDescEnum.ASC;

  /**
   * Indicates whether pagination is enabled.
   * Default value: true
   */
  @IsBoolean()
  @IsOptional()
  is_paginate?: boolean;
}
