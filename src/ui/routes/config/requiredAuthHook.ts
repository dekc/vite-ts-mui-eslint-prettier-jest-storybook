import { Transition } from '@uirouter/react';

import { rootStore } from '@/mobxStore/RootStore';

const hook = {
  criteria: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    to: (state: any): boolean => state.data?.requiredAuth,
  },

  callback: (transition: Transition) => {
    const userStore = rootStore.userStore;
    const state = transition.router.stateService;

    if (!userStore.isAuthenticated()) {
      return state.target('login', undefined, { location: false });
    }
  },
};

export default hook;
