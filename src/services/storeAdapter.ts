import { UserStoreService } from '@/app/ports';
import { useRootStore } from '@/store';

const useUserStore = (): UserStoreService => {
  const { userStore } = useRootStore();

  const { name, id, email, updateUser } = userStore;

  return { user: { name, id, email }, updateUser };
};

export { useUserStore };
