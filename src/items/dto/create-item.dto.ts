import { Type } from "class-transformer";
import { IsString, MaxLength, MinLength, IsInt, Min } from "class-validator";

export class CreateItemDto {
	@IsString()
  @MinLength(1)
  @MaxLength(15)
  name: string;

  @IsInt()
  @Type(() => Number)
  @Min(1)
  price: number;

  @IsString()
  @MinLength(1)
  @MaxLength(20)
  description: string;
}