import { Fighter } from 'src/core/entities';
import { WebScrapperService } from './web-scrapper.abstract';

export abstract class FighterWebScrapperService extends WebScrapperService<Fighter> {}
