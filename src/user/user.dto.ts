import { UserType } from './user.type';

export class UserCreateDto {
  readonly email: string;
  readonly id: string;
  readonly password: string;
  readonly name: string;
  readonly userType: UserType;
}

export class UserUpdateDto {
  readonly email: string;
  readonly id: string;
  readonly name: string;
  readonly userType: UserType;
}

export class UserPasswordUpdateDto {
  readonly password: string;
}
