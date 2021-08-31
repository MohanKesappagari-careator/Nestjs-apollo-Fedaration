import { UpdateUserInput } from './dto/update-user.input';
import { CreateUserInput } from './dto/create-user.input';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  allUsers() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() create: CreateUserInput) {
    return this.userService.create(create);
  }
  @Patch()
  update(@Body() update: UpdateUserInput) {
    return this.userService.update(update.id, update);
  }

  @Delete()
  delete(@Body() id: string) {
    return this.userService.remove(id);
  }
}
