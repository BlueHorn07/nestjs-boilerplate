import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Post()
  createUser() {}

  @Get()
  getAllUsers() {}

  @Put()
  getUserById() {}

  @Delete()
  deleteUser() {}
}
