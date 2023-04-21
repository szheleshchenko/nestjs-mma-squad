import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { EventWebScrapperService, FighterWebScrapperService } from 'src/core/abstracts/web-scrapper';
import { CheerioEventWebScrapperService } from './cheerio-event-web-scrapper.service';
import { CheerioFighterWebScrapperService } from './cheerio-fighter-web-scrapper.service';

@Module({
  providers: [
    {
      provide: FighterWebScrapperService,
      useClass: CheerioFighterWebScrapperService
    },
    {
      provide: EventWebScrapperService,
      useClass: CheerioEventWebScrapperService
    }
  ],
  imports: [HttpModule],
  exports: [FighterWebScrapperService, EventWebScrapperService]
})
export class CheerioWebScrapperModule {}
