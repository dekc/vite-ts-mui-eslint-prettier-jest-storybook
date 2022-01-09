import { Email, User, UserName } from '@/domain/User';
import { VesselPort } from '@/domain/VesselPort';

export interface AuthenticationService {
  auth(name: UserName, email: Email): Promise<User>;
}

export interface UserStoreService {
  user?: User;
  updateUser(user: User): void;
}
export interface QueryService {
  getAllPorts(): Promise<Array<VesselPort> | undefined>;
  getPortByCode(portCode: string): Promise<Array<VesselPort> | undefined>;
}
