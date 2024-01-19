import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({ example: 'abcd001', description: 'id' })
  @IsNotEmpty({ message: "id shouldn't empty"  })
  readonly id: string;

  @ApiProperty({ example: 'Nick', description: 'name' })
  @IsNotEmpty({ message: "name shouldn't empty"  })
  readonly name: string;

  @ApiProperty({ example: 'hyx840767429@gmil.com', description: 'email' })
  readonly email: string;

}
