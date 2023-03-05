import { UserType } from './user.type';
import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly password: string;

  @ApiProperty()
  readonly nickname: string;

  @ApiProperty({ enum: UserType })
  readonly user_type: UserType;
}

export class UserUpdateDto {
  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly nickname: string;

  @ApiProperty({ enum: UserType })
  readonly user_type: UserType;
}

export class UserPasswordUpdateDto {
  @ApiProperty()
  readonly password: string;
}
