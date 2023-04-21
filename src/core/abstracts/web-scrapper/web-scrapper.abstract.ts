import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';

export abstract class WebScrapperService<T> {
  constructor(private httpService: HttpService) {}

  public async scrape(url: string): Promise<T> {
    const data = this.httpService.get(url)
      .pipe(
        map((response) => this.extract(response.data))
      );

    return lastValueFrom(data);
  }

  public abstract extract(html: string): T;
}
