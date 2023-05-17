import { Injectable } from '@nestjs/common';
import { Event } from 'src/core';
import { DatabaseService } from 'src/core/abstracts/database';

@Injectable()
export class EventService {
  constructor(private databaseService: DatabaseService) {}

  public search(): Promise<Array<Event>> {
    return this.databaseService.events.search();
  }

  public createMany(events: Array<Event>): Promise<unknown> {
    return this.databaseService.events.createMany(events);
  }
}
