import { Controller, Get } from '@nestjs/common';

// App imports
import { AuthService } from '../services/auth.service';

@Controller()
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Get()
  getHello(): string {
    return this.service.getHello();
  }
}
