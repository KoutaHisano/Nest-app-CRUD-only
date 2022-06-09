import { IsString, IsNumberString, MaxLength, MinLength } from "class-validator";

export class CreateItemDto {
	@IsString()
  @MinLength(1)
  @MaxLength(15)
  name: string;

  @IsNumberString()
  @MinLength(1)
  @MaxLength(10)
  price: number;

  @IsString()
  @MinLength(1)
  @MaxLength(20)
  description: string;
}