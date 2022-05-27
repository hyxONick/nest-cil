import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class DeviceTypeDto {
  @ApiProperty({ example: 1, description: '设备编号' })
  @IsNotEmpty({ message: '设备编号不能为空' })
  readonly deviceTypeNo: number;

  @ApiProperty({ example: 'Nick设备', description: '设备名' })
  @IsNotEmpty({ message: '设备名不能为空' })
  readonly name: string;

  @ApiProperty({ example: '这是备注', description: '备注' })
  readonly remarks: string;
}
