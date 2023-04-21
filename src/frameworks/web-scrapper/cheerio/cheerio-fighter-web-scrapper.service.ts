import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import { Fighter } from 'src/core';
import { FighterWebScrapperService } from 'src/core/abstracts/web-scrapper';

@Injectable()
export class CheerioFighterWebScrapperService extends FighterWebScrapperService {
  constructor(
    httpService: HttpService
  ) {
    super(httpService);
  }

  public extract(html: string): Fighter {
    // TODO: Add functionality
    return cheerio.load(html);
  }
}
