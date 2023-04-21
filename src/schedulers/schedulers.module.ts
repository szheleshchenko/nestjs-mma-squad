import { Module } from '@nestjs/common';
import { EventSchedulerModule } from './event';

@Module({
  imports: [
    EventSchedulerModule
  ],
  exports: [
    EventSchedulerModule
  ]
})
export class SchedulersModule {}
