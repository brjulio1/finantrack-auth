import { Module } from '@nestjs/common';

// App imports
import { AppController } from './views/app.controller';
import { AppService } from './services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
