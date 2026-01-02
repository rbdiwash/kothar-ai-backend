import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AIModule } from './AI/AIModule.module';
import { AIService } from './AI/AIModule.service';

@Module({
  imports: [AIModule],
  controllers: [AppController],
  providers: [AppService, AIService],
})
export class AppModule {}
