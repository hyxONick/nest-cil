import {IsNotEmpty, IsNumberString, IsDate, IsOptional} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty({ example: 'abcd001', description: 'id' })
  @IsOptional()
  readonly id?: string;

  @ApiProperty({ example: 'Nick', description: 'name' })
  @IsNotEmpty({ message: "name shouldn't empty" })
  readonly name: string;

  @ApiProperty({ example: '100.00', description: 'originalPrice' })
  @IsNotEmpty({ message: "originalPrice shouldn't empty" })
  @IsNumberString({}, { message: 'originalPrice should be a valid number' })
  readonly originalPrice: number;

  @ApiProperty({ example: '80.00', description: 'discountPrice' })
  @IsNotEmpty({ message: "discountPrice shouldn't empty" })
  @IsNumberString({}, { message: 'discountPrice should be a valid number' })
  readonly discountPrice: number;

  @ApiProperty({ example: 'Electronics', description: 'category' })
  @IsNotEmpty({ message: "category shouldn't empty" })
  readonly category: string;

  @ApiProperty({ example: 'Some Store', description: 'store' })
  @IsNotEmpty({ message: "store shouldn't empty" })
  readonly store: string;

  @ApiProperty({ example: '2022-01-01T12:00:00.000Z', description: 'updateTime' })
  // @IsNotEmpty({ message: "updateTime shouldn't empty" })
  // @IsDate({ message: 'updateTime should be a valid Date object' })
  readonly updateTime: Date;

  @ApiProperty({ example: true, description: 'isDeleted' })
  @IsOptional()
  readonly isDeleted?: boolean;
}

