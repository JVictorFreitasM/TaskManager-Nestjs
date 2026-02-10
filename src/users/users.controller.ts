import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  create(@Body() user: UserDto) {
    this.userService.create(user);
  }
  @Get('/:username')
  findByUserName(@Param('username') username: string) {
    return this.userService.findByUserName(username);
  }
}
