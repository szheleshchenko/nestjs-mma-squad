import { Expose } from 'class-transformer';

export class Event {
  @Expose()
  public id: number;

  @Expose()
  public name: string;

  @Expose()
  public date: string;

  @Expose()
  public venue: string;

  @Expose()
  public sherdogUrl: string;

  constructor(event: Partial<Event> = {}) {
    Object.assign(this, event);
  }
}
