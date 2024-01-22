import { IsNotEmpty, MinLength, MaxLength, IsOptional  } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ example: 'abcd001', description: 'id' })
  @IsOptional()
  readonly id?: string;

  @ApiProperty({ example: 'Nick', description: 'name' })
  @IsNotEmpty({ message: "name shouldn't empty"  })
  readonly name: string;

  @ApiProperty({ example: 'hyx840767429@gmil.com', description: 'email' })
  readonly email: string;

  @ApiProperty({ example: 'hashed_password', description: 'password' })
  @IsOptional()
  readonly password: string;

  @ApiProperty({ example: 'some_token', description: 'token' })
  @IsOptional()
  readonly token: string;

  @ApiProperty({ example: 'admin', description: 'role' })
  @IsOptional()
  readonly role: string;

  @ApiProperty({ example: true, description: 'isDeleted' })
  @IsOptional()
  readonly isDeleted?: boolean;
}
