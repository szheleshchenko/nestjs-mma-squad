import { Module } from '@nestjs/common';
import { WebScrapperModule } from 'src/frameworks/web-scrapper/web-scrapper.module';
import { EventModule } from 'src/services/event/event.module';
import { EventScheduler } from './event.scheduler';

@Module({
  imports: [WebScrapperModule, EventModule],
  providers: [EventScheduler],
  exports: [EventScheduler]
})
export class EventSchedulerModule {}
