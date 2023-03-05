import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCreateDto, UserUpdateDto } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  save(dto: UserCreateDto) {
    return this.userRepo.save(dto);
  }

  findAll() {
    return this.userRepo.find();
  }

  findById(uuid: string) {
    return this.userRepo.findOneBy({ uuid: uuid });
  }

  update(uuid: string, dto: UserUpdateDto) {
    return this.userRepo.update({ uuid: uuid }, dto);
  }

  delete(uuid: string) {
    return this.userRepo.delete({ uuid: uuid });
  }
}
