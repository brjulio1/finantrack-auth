import { Controller, Get } from '@nestjs/common';

// App imports
import { AuthService } from '../services';

@Controller()
export class AuthController {
  constructor(private readonly service: AuthService) {}

  /**
   * 
   * @returns 
   */
  @Get()
  async getHello(): Promise<string> {
    const result = await this.service.validate();
    return result.username;
  }

}
