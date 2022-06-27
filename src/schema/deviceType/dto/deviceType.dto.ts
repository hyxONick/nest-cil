import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeviceTypeDto {
  @ApiProperty({ example: 1, description: 'deviceTypeNo' })
  @IsNotEmpty({ message: "deviceTypeNo shouldn't empty" })
  readonly deviceTypeNo: number;

  @ApiProperty({ example: 'monitor', description: 'deviceType name' })
  @IsNotEmpty({ message: "deviceType name shouldn't empty" })
  readonly name: string;

  @ApiProperty({ example: 'it is some remark', description: 'remark' })
  readonly remarks: string;
}
