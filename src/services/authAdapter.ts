import { v4 as uuidv4 } from 'uuid';

import { AuthenticationService } from '@/app/ports';
import { Password, UserName } from '@/domain/User';

import { fakeApi } from './api';

export const useAuth = (): AuthenticationService => {
  return {
    auth(name: UserName, password: Password) {
      console.log(`Authenticating user ${name} - ${password}`);
      return fakeApi({
        name,
        email: 'fake-email@fakeApi.com',
        id: uuidv4(),
        org: 'Fake Incorporated',
      });
    },
  };
};
