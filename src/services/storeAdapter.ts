import { UserStoreService } from '@/app/ports';
import { useRootStore } from '@/mobxStore';
// import { useStore } from '@/contextStore/store';

const useUserStore = (): UserStoreService => {
  const { userStore } = useRootStore();

  return userStore;
};

// const useUserStore = (): UserStoreService => {
//   const userStore = useStore();

//   return userStore;
// };

export { useUserStore };
