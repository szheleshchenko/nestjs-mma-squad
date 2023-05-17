import { WebScrapperService } from './web-scrapper.abstract';

export abstract class EventUrlsWebScrapperService extends WebScrapperService<
  Array<string>
> {}
