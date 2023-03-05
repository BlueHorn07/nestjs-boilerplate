import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import {
  UserCreateDto,
  UserUpdateDto,
  UserPasswordUpdateDto,
} from './user.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiBody({ type: UserCreateDto })
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

  @Put('password/:uuid')
  @ApiBody({ type: UserPasswordUpdateDto })
  updateUserPassword(
    @Param('uuid') uuid: string,
    @Body() dto: UserPasswordUpdateDto,
  ) {
    return this.userService.updatePassword(uuid, dto);
  }

  @Put(':uuid')
  @ApiBody({ type: UserUpdateDto })
  updateUser(@Param('uuid') uuid: string, @Body() dto: UserUpdateDto) {
    return this.userService.update(uuid, dto);
  }

  @Delete(':uuid')
  deleteUser(@Param('uuid') uuid: string) {
    return this.userService.delete(uuid);
  }
}
