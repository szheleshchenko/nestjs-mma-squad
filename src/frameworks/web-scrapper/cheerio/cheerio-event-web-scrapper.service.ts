import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import { lastValueFrom, of, switchMap } from 'rxjs';
import { EventWebScrapperService } from 'src/core/abstracts/web-scrapper';

@Injectable()
export class CheerioEventWebScrapperService extends EventWebScrapperService {
  constructor(
    private httpService: HttpService
  ) {
    super();
  }

  public scrape({ url, eventURLs }: { url: string, eventURLs: Array<string> }): Promise<Array<string>> {
    const data = this.httpService.get<string>(url)
      .pipe(
        switchMap((response) => {
          const $ = cheerio.load(response.data);

          eventURLs.concat(this.extract($));

          const nextPageLink = this.getNextPageLink($);

          if (nextPageLink) {
            return this.scrape({ url, eventURLs });
          }

          return of(eventURLs);
        })
      )
    ;

    return lastValueFrom(data);
  }
  
  public extract($: cheerio.CheerioAPI): Array<string> {
    const eventURLs = [];

    $('tr[itemtype="http://schema.org/Event"] a[itemprop="url"]').each(
      (_, element) => {
        const eventURL = $(element).attr('href');

        eventURLs.push(eventURL);
      }
    );

    return eventURLs;
  }

  public getNextPageLink($: cheerio.CheerioAPI): string {
    return $('a[title="Older Events »"]').attr('href');
  }
}
