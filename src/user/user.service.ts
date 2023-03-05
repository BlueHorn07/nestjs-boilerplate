import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as crypto from 'crypto';
import {
  UserCreateDto,
  UserPasswordUpdateDto,
  UserUpdateDto,
} from './user.dto';
import { UserEntity } from './user.entity';
import { encryptPassword } from '../utils/password';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  save(dto: UserCreateDto) {
    const crypto_salt = crypto.randomBytes(64).toString('base64');
    const encryptedPassword = encryptPassword(dto.password, crypto_salt);

    const saveDto = Object.assign(dto, {
      crypto_salt: crypto_salt,
      encrypted_password: encryptedPassword,
    });

    return this.userRepo.save(saveDto);
  }

  findAll() {
    return this.userRepo.find();
  }

  findByUuid(uuid: string) {
    return this.userRepo.findOneBy({ uuid: uuid });
  }

  update(uuid: string, dto: UserUpdateDto) {
    return this.userRepo.update({ uuid: uuid }, dto);
  }

  updatePassword(uuid: string, dto: UserPasswordUpdateDto) {
    const crypto_salt = crypto.randomBytes(64).toString('base64');
    const encryptedPassword = encryptPassword(dto.password, crypto_salt);

    return this.userRepo.update(
      { uuid: uuid },
      { crypto_salt: crypto_salt, encrypted_password: encryptedPassword },
    );
  }

  delete(uuid: string) {
    return this.userRepo.delete({ uuid: uuid });
  }
}
