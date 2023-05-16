
export abstract class WebScrapperService<T> {
  public abstract scrape(...args: Array<unknown>): Promise<T>;

  public abstract extract(...args: Array<unknown>): T;
}
