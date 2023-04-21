import { Module } from '@nestjs/common';
import { WebScrapperModule } from 'src/frameworks/web-scrapper/web-scrapper.module';
import { EventScheduler } from './event.scheduler';

@Module({
  providers: [EventScheduler],
  imports: [WebScrapperModule]
})
export class EventSchedulerModule {}
