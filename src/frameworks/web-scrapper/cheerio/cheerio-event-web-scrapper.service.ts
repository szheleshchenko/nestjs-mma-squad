import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import { lastValueFrom, of, switchMap } from 'rxjs';
import { appConfig } from 'src/config';
import { EventWebScrapperService } from 'src/core/abstracts/web-scrapper';

@Injectable()
export class CheerioEventWebScrapperService extends EventWebScrapperService {
  constructor(private httpService: HttpService) {
    super();
  }

  public scrape({
    url,
    eventURLs = []
  }: {
    url: string;
    eventURLs: Array<string>;
  }): Promise<Array<string>> {
    const data = this.httpService.get<string>(url).pipe(
      switchMap((response) => {
        const $ = cheerio.load(response.data);

        eventURLs = eventURLs.concat(this.extract($));

        const nextPageLink = this.getNextPageLink($);

        if (nextPageLink) {
          return this.scrape({ url: nextPageLink, eventURLs });
        }

        return of(eventURLs);
      })
    );
    return lastValueFrom(data);
  }

  public extract($: cheerio.CheerioAPI): Array<string> {
    const eventURLs = [];

    $('tr[itemtype="http://schema.org/Event"] a[itemprop="url"]').each(
      (_, element) => {
        const eventURL = $(element).attr('href');

        console.log(eventURL);

        eventURLs.push(eventURL);
      }
    );

    return eventURLs;
  }

  public getNextPageLink($: cheerio.CheerioAPI): string | null {
    let url = '';

    $('span.pagination a').each((_, element) => {
      const formattedElement = $(element);

      if (formattedElement.text().includes('Older Events')) {
        url = formattedElement.attr('href');
      }
    });

    if (!url) {
      return null;
    }

    return appConfig.sherdog.url + url;
  }
}
