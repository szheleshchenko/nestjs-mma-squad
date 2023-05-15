import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';
import { EventWebScrapperService } from 'src/core/abstracts/web-scrapper';
import { EventService } from 'src/services/event/event.service';

@Injectable()
export class EventScheduler {
  private logger: Logger = new Logger();

  private started = false;

  constructor(
    private configService: ConfigService,
    private eventWebScrapper: EventWebScrapperService,
    private eventService: EventService
  ) {}

  @Cron(CronExpression.EVERY_10_SECONDS)
  public async search(): Promise<void> {
    if (this.started) {
      return;
    }
    this.started = true;
    try {
      this.logger.log('START');
      const eventURLs = await this.eventWebScrapper.scrape(
        this.configService.get<string>('SHERDOG_UFC_EVENTS_PAGE')
      );
      const existingEventURLs = await this.eventService.search();
      const filteredEventURLs = existingEventURLs.filter(
        ({ sherdogUrl }) => !eventURLs.includes(sherdogUrl)
      );

      this.logger.log(filteredEventURLs);
    } catch (e) {
      this.logger.error(e);
    }
  }
}
