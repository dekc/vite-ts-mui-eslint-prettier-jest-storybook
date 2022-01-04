import { Email, UserName } from '@/domain/User';
import { useAuth } from '@/services/authAdapter';
import { useUserStore } from '@/services/storeAdapter';

import { AuthenticationService } from './ports';

const useAuthenticate = () => {
  const auth: AuthenticationService = useAuth();
  const store: UserStoreService = useUserStore;

  const authenticate = async (name: UserName, email: Email): Promise<void> => {
    const user = await auth.auth(name, email);
    store.updateUser(user);
  };

  return {
    user: store.user,
    authenticate,
  };
};

export { useAuthenticate };
