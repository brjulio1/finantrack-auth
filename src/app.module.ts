import { Module } from '@nestjs/common';

// App imports
import { AuthController } from './controllers';
import { AuthService } from './services';

@Module({
  imports: [],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
