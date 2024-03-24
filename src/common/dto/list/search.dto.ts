import { IsOptional, IsString } from 'class-validator';

/**
 * Data transfer object for search arguments.
 */
export class SearchArgsDto {
  /**
   * The search query.
   */
  @IsOptional()
  @IsString()
  readonly search?: string;
}
