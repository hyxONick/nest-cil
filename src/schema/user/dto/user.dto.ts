import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ example: 'Nick', description: 'name' })
  @IsNotEmpty({ message: "name shouldn't empty"  })
  readonly name: string;

  @ApiProperty({ example: '18681540871', description: 'tel' })
  @IsNotEmpty({ message: "tel shouldn't empty" })
  readonly tel: string;

  @ApiProperty({ example: 'hyx840767429@gmil.com', description: 'email' })
  readonly email: string;

  @ApiProperty({ example: '34567', description: 'employeeNumber' })
  readonly employeeNumber: string;

  @ApiProperty({ example: false, description: 'is Admin?' })
  readonly isAdmin: boolean;

  @ApiProperty({ example: 'R & D', description: 'department' })
  readonly dept: string;

  @ApiProperty({ example: 'front-end', description: 'position' })
  readonly position: string;

  @ApiProperty({ example: 'it is some remark', description: 'remark' })
  readonly remarks: string;

  @ApiProperty({ example: 'edf2388fds6232jks', description: 'token' })
  readonly token: string;

  @ApiProperty({ example: '2022-07-04 14:00:22', description: 'lastUpdatedTime' })
  readonly lastUpdatedTime: string;
}
