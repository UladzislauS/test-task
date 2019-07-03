import { User } from '../../../interfaces';

export interface UsersApi {
  data: Array<User>;
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
}
