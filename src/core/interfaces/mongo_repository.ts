import { RepositoryQuery } from '@app/core';

export interface Repository<T> {
  find: (query: RepositoryQuery) => Promise<T[]>;
  findById: (id: string) => Promise<T | undefined>;
  findOne: (filters: unknown) => Promise<T | undefined>;
  count: (filters: unknown) => Promise<number>;
  create: (entity: T) => Promise<T>;
  update: (entity: { _id: string } & Partial<T>) => Promise<T>;
  del: (id: string) => Promise<void>;
}
