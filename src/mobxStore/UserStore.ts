import { makeAutoObservable } from 'mobx';

import { User } from '@/domain/User';

import { RootStore } from './RootStore';

class UserStore {
  root: RootStore;

  user: User | undefined = undefined;

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }
  get Name() {
    return this.user?.name;
  }

  get Id() {
    return this.user?.id;
  }

  get Email() {
    return this.user?.email;
  }

  updateUser(user: User): void {
    this.user = {
      ...this.user,
      name: user.name,
      id: user.id,
      email: user.email,
      org: user.org,
    };
  }
}

export { UserStore };
