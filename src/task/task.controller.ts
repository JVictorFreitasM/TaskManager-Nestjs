import {
  Body,
  Controller,
  Param,
  Post,
  Get,
  Put,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import * as taskDto from './task.dto';
import { TaskService } from './task.service';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() task: taskDto.TaskDto) {
    this.taskService.create(task);
  }

  @Get('/:id')
  findById(@Param('id') id: string) {
    return this.taskService.findById(id);
  }

  @Get()
  findAll(@Query() params: taskDto.FindAllParameters): taskDto.TaskDto[] {
    return this.taskService.findAll(params);
  }

  @Put()
  update(@Body() task: taskDto.TaskDto) {
    return this.taskService.update(task);
  }

  @Delete('/:id')
  delete(@Param('id') id: string) {
    return this.taskService.delete(id);
  }
}
