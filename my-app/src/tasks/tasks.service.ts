import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  async create(createTaskDto: CreateTaskDto, userId: number): Promise<Task> {
    const task = this.tasksRepository.create({
      ...createTaskDto,
      createdById: userId,
    });
    return this.tasksRepository.save(task);
  }

  async findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  async findByUser(userId: number): Promise<Task[]> {
    return this.tasksRepository.find({ where: { createdById: userId } });
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.tasksRepository.findOne({ where: { id } });
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  async update(
    id: number,
    updateTaskDto: UpdateTaskDto,
    userId: number,
    userRole: string,
  ): Promise<Task> {
    const task = await this.findOne(id);

    // Check if user has permission to update the task
    if (task.createdById !== userId && userRole !== 'ADMIN') {
      throw new ForbiddenException('You can only edit your own tasks');
    }

    await this.tasksRepository.update(id, updateTaskDto);
    return this.findOne(id);
  }

  async remove(id: number, userRole: string): Promise<void> {
    // Check if user has permission to delete the task
    if (userRole !== 'ADMIN') {
      throw new ForbiddenException('Only admins can delete tasks');
    }

    const task = await this.findOne(id);
    await this.tasksRepository.remove(task);
  }

  async search(query: string): Promise<Task[]> {
    return this.tasksRepository.find({
      where: [
        { title: Like(`%${query}%`) },
        { description: Like(`%${query}%`) },
      ],
    });
  }
}
