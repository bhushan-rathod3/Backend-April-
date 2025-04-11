import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { JsonParsePipe } from './pipes/jsonParse.pipe';
import { UserAgent } from './decorators/user-agent.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('admin')
  admin() {
    return 'This is Admin Route';
  }

  @Get('parse-json')
  parseJson(@Query('data', JsonParsePipe) data: any) {
    return { parsed: data };
  }

  @Get('whoami')
  whoAmI(@UserAgent() userAgent: string) {
    console.log('Client User-Agent:', userAgent);
    return { userAgent };
  }

  @Get('reports')
  getReport() {
    return { message: 'Here is your protected report!' };
  }
}
