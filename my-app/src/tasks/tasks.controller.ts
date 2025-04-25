import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { TaskService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from '../common/guards/auth.guard';
import { RoleGuard } from '../common/guards/role.guard';
import { TaskStatusValidationPipe } from '../common/pipes/status-validation.pipe';

@Controller('tasks')
@UseGuards(AuthGuard)
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(
    @Body() createTaskDto: CreateTaskDto,
    @Body('status', TaskStatusValidationPipe) status: 'OPEN' | 'DONE',
    @Request() req,
  ) {
    return this.taskService.create(createTaskDto, req.user.id);
  }

  @Get()
  findAll(@Request() req, @Query('search') search?: string) {
    if (search) {
      return this.taskService.search(search);
    }

    if (req.user.role === 'ADMIN') {
      return this.taskService.findAll();
    } else {
      return this.taskService.findByUser(req.user.id);
    }
  }

  @Get('mine')
  findMine(@Request() req) {
    return this.taskService.findByUser(req.user.id);
  }

  @Get('search')
  search(@Query('query') query: string) {
    return this.taskService.search(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @Body('status', TaskStatusValidationPipe) status: 'OPEN' | 'DONE',
    @Request() req,
  ) {
    return this.taskService.update(
      +id,
      updateTaskDto,
      req.user.id,
      req.user.role,
    );
  }

  @Delete(':id')
  @UseGuards(RoleGuard)
  remove(@Param('id') id: string, @Request() req) {
    return this.taskService.remove(+id, req.user.role);
  }
}
