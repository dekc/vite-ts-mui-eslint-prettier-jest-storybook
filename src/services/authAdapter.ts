import { v4 as uuidv4 } from 'uuid';

import { AuthenticationService } from '@/app/ports';
import { Email, UserName } from '@/domain/User';

import { fakeApi } from './api';

export const useAuth = (): AuthenticationService => {
  return {
    auth(name: UserName, email: Email) {
      return fakeApi({
        name,
        email,
        id: uuidv4(),
      });
    },
  };
};
