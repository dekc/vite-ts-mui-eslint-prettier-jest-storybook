import { Password, UserName } from '@/domain/User';
import { useAuth } from '@/services/authAdapter';
import { useUserStore } from '@/services/storeAdapter';

import { AuthenticationService } from './ports';

const useAuthenticate = () => {
  const auth: AuthenticationService = useAuth();

  const store = useUserStore();

  const authenticate = async (name: UserName, password: Password): Promise<void> => {
    const user = await auth.auth(name, password);
    console.log({ user });
    store.updateUser(user);
  };

  return {
    user: store.user,
    authenticate,
  };
};

export { useAuthenticate };
