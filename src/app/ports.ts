import { Email, User, UserName } from '@/domain/User';

export interface AuthenticationService {
  auth(name: UserName, email: Email): Promise<User>;
}

export interface UserStoreService {
  user?: User;
  updateUser(user: User): void;
}
