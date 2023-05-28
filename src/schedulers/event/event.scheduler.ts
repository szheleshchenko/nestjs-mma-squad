import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Event } from 'src/core';
import { EventUrlsWebScrapperService } from 'src/core/abstracts/web-scrapper';
import { EventService } from 'src/services/event/event.service';

// TODO: Add functionality
@Injectable()
export class EventScheduler {
  private searchJobStarted: boolean;
  private updateJobStarted: boolean;

  constructor(
    private configService: ConfigService,
    private eventUrlsWebScrapper: EventUrlsWebScrapperService,
    private eventService: EventService
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  public async search(): Promise<void> {
    if (this.searchJobStarted) {
      return;
    }

    this.searchJobStarted = true;

    try {
      const eventURLs = await this.eventUrlsWebScrapper.scrape({
        url: this.configService.get<string>('SHERDOG_UFC_EVENTS_PAGE')
      });
      const existingEventURLs = (await this.eventService.search()) || [];
      const filteredEventURLs = eventURLs.filter(
        (url) => !existingEventURLs.some(({ sherdogUrl }) => url === sherdogUrl)
      );
      const events = filteredEventURLs.map(
        (sherdogUrl) => new Event({ sherdogUrl })
      );

      console.log(events);

      await this.eventService.createMany(events);
    } catch (e) {}
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  public async update(): Promise<void> {
    if (this.updateJobStarted) {
      return;
    }

    this.updateJobStarted = true;

    const existingEventURLs = (await this.eventService.search()) || [];

    console.log(existingEventURLs);
  }
}
