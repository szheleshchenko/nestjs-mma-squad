import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import { Fighter } from 'src/core';
import { FighterWebScrapperService } from 'src/core/abstracts/web-scrapper';

@Injectable()
export class CheerioFighterWebScrapperService extends FighterWebScrapperService {
  public async scrape(...args: unknown[]): Promise<Fighter> {
    return [];
  }

  public extract(html: string): Fighter {
    return cheerio.load(html);
  }
}
