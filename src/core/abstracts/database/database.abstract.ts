import { Event, Fighter } from 'src/core/entities';
import { Repository } from '../repository';

export abstract class DatabaseService {
  abstract events: Repository<Event>;
  abstract fighters: Repository<Fighter>;
}
