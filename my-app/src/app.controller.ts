import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { TrialGuard } from './guards/trial.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(TrialGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('greet/:name')
  greet(@Param('name') name: string): string {
    return this.appService.greet(name);
  }

  @Get('tech-stack')
  getTechStack(): string[] {
    return this.appService.getTechStack();
  }
}
