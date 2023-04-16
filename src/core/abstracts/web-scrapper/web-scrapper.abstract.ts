import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';

export abstract class WebScrapperService<T> {
  constructor(private httpService: HttpService) {}

  public scrape(url: string): Observable<T> {
    return this.httpService
      .get(url)
      .pipe(map((response) => this.extract(response.data)));
  }

  public abstract extract(html: string): T;
}
