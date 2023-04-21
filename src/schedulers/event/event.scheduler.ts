import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cron, CronExpression } from '@nestjs/schedule';
import { EventWebScrapperService } from 'src/core/abstracts/web-scrapper';

@Injectable()
export class EventScheduler {
  private readonly logger = new Logger(EventScheduler.name);
  constructor(
    private configService: ConfigService,
    private eventWebScrapper: EventWebScrapperService
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  public search(): void {
    this.eventWebScrapper.scrape(
      this.configService.get<string>('SHERDOG_UFC_EVENTS_PAGE')
    );
  }
}
