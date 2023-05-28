import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import {
  EventUrlsWebScrapperService,
  FighterWebScrapperService
} from 'src/core/abstracts/web-scrapper';
import { CheerioEventUrlsWebScrapperService } from './cheerio-event-web-scrapper.service';
import { CheerioFighterWebScrapperService } from './cheerio-fighter-web-scrapper.service';

@Module({
  providers: [
    {
      provide: FighterWebScrapperService,
      useClass: CheerioFighterWebScrapperService
    },
    {
      provide: EventUrlsWebScrapperService,
      useClass: CheerioEventUrlsWebScrapperService
    }
  ],
  imports: [HttpModule],
  exports: [FighterWebScrapperService, EventUrlsWebScrapperService]
})
export class CheerioWebScrapperModule {}
