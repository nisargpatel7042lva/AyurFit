import Dexie, { Table } from 'dexie';
import { User } from '../types/auth';

interface StoredUser extends User {
  password: string;
}

export class AyurFitDB extends Dexie {
  users!: Table<StoredUser>;

  constructor() {
    super('ayurfit');
    this.version(1).stores({
      users: '++id, email'
    });
  }
}

export const db = new AyurFitDB();