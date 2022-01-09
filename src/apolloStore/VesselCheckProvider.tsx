import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';

const httpLink = createHttpLink({
  uri: 'https://gwstaging.vessel-check.com/v1/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'content-type': 'application/json',
      'x-hasura-admin-secret': 'hasuraSecretStaging',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export type VesselCheckProviderProps = {
  children: React.ReactNode;
};

const VesselCheckProvider = ({ children }: VesselCheckProviderProps) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export { VesselCheckProvider };
