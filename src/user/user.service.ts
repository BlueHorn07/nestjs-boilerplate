import { Injectable } from '@nestjs/common';
import { UserCreateDto, UserUpdateDto } from './user.dto';

@Injectable()
export class UserService {
  save(dto: UserCreateDto) {

  }

  findAll() {

  }

  findById(id: string) {
    
  }

  update(id: string, dto: UserUpdateDto) {

  }

  delete(id: string) {

  }
}
