import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://apollo.trusteeglobal.com/graphql',
  cache: new InMemoryCache(),
});

export default client;
