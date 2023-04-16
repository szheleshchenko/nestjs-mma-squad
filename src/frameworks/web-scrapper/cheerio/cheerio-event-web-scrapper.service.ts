import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import { Event } from 'src/core';
import { EventWebScrapperService } from 'src/core/abstracts/web-scrapper';

@Injectable()
export class CheerioEventWebScrapperService extends EventWebScrapperService {
  public extract(html: string): Event {
    // TODO: Add functionality
    return cheerio.load(html);
  }
}
