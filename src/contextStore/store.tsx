import React, { createContext, useContext, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StoreContext = createContext<any>({});

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState();

  const store = {
    user,
    updateUser: setUser,
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

const useStore = () => {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useStore must be used within StoreProvider');
  }
  return context;
};

export { StoreProvider, useStore };
