import { Model } from 'mongoose';
import { Repository } from 'src/core/abstracts/repository';

export class MongoRepository<T> implements Repository<T> {
  constructor(private repository: Model<T>) {}

  public search(): Promise<T[]> {
    return this.repository.find().exec();
  }

  public get(id: string): Promise<T> {
    return this.repository.findById(id).exec();
  }
  public create(item: T): Promise<T> {
    return this.repository.create(item);
  }

  public createMany(items: Array<T>): Promise<unknown> {
    return this.repository.insertMany(items);
  }

  public update(id: string, item: T): Promise<T> {
    return this.repository.findByIdAndUpdate(id, item);
  }

  public delete(id: string): Promise<T> {
    return this.repository.findByIdAndDelete(id);
  }
}
