import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';
import { EventWebScrapperService } from 'src/core/abstracts/web-scrapper';
import { EventService } from 'src/services/event/event.service';

@Injectable()
export class EventScheduler {
  constructor(
    private configService: ConfigService,
    private eventWebScrapper: EventWebScrapperService,
    private eventService: EventService
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  public async search(): Promise<void> {
    try {
      const eventURLs = await this.eventWebScrapper.scrape({
        url: this.configService.get<string>('SHERDOG_UFC_EVENTS_PAGE')
      });
      const existingEventURLs = (await this.eventService.search()) || [];
      const filteredEventURLs = existingEventURLs.filter(
        ({ sherdogUrl }) => !eventURLs.includes(sherdogUrl)
      );
    } catch (e) {}
  }
}
