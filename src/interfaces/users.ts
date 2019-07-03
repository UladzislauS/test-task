import { User } from './';

export interface Users {
  users: Array<User>;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
