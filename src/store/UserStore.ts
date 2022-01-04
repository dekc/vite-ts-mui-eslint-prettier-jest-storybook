import { makeAutoObservable } from 'mobx';

import { RootStore } from './RootStore';

class UserStore {
  root: RootStore;
  name = '';
  id = '';
  email = '';

  constructor(root: RootStore) {
    this.root = root;
    makeAutoObservable(this);
  }
  get Name() {
    return this.name;
  }

  get Id() {
    return this.id;
  }

  get Email() {
    return this.email;
  }

  updateUser(user: { name: string; id: string; email: string }) {
    this.updateName(user.name);
    this.updateId(user.id);
    this.updateEmail(user.email);
  }

  updateName(name: string) {
    this.name = name;
  }

  updateId(id: string) {
    this.id = id;
  }

  updateEmail(email: string) {
    this.email = email;
  }
}

export { UserStore };
