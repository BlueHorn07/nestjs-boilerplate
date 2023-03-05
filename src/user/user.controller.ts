import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto, UserUpdateDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() dto: UserCreateDto) {
    return this.userService.save(dto);
  }

  @Get()
  getAllUsers() {
    return this.userService.findAll();
  }

  @Get(':uuid')
  getUserByUuid(@Param('uuid') uuid: string) {
    return this.userService.findByUuid(uuid);
  }

  @Put(':uuid')
  getUserById(@Param('uuid') uuid: string, @Body() dto: UserUpdateDto) {
    return this.userService.update(uuid, dto);
  }

  @Delete(':uuid')
  deleteUser(@Param('uuid') uuid: string) {
    return this.userService.delete(uuid);
  }
}
