export abstract class Repository<T> {
  public abstract search(): Promise<Array<T>>;

  public abstract get(id: string): Promise<T>;

  public abstract create(item: T): Promise<T>;

  public abstract update(id: string, item: T): Promise<T>;

  public abstract delete(id: string): Promise<T>;
}
