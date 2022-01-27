import { UserStore } from './UserStore';

class RootStore {
  userStore: UserStore;

  constructor() {
    // instantiate all child stores
    this.userStore = new UserStore(this);
  }
}

const rootStore = new RootStore();
export { RootStore, rootStore };
