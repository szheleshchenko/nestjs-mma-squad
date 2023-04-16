import { Event } from 'src/core/entities';
import { WebScrapperService } from './web-scrapper.abstract';

export abstract class EventWebScrapperService extends WebScrapperService<Event> {}
