import { createContext, ReactNode, useContext } from 'react';

import { RootStore } from './RootStore';

const StoreContext = createContext<RootStore | undefined>(undefined);

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const root = new RootStore();

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
};

const useRootStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }

  return context;
};

export { StoreProvider, useRootStore };
