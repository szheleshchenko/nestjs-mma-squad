import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/frameworks/database/database.module';
import { EventService } from './event.service';


@Module({
  imports: [
    DatabaseModule
  ],
  providers: [EventService],
  exports: [EventService]
})
export class EventModule {}
