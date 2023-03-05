import { UserType } from './user.type';

export class UserCreateDto {
  readonly email: string;
  readonly id: string;
  readonly password: string;
  readonly nickname: string;
  readonly user_type: UserType;
}

export class UserUpdateDto {
  readonly email: string;
  readonly id: string;
  readonly nickname: string;
  readonly user_type: UserType;
}

export class UserPasswordUpdateDto {
  readonly password: string;
}
