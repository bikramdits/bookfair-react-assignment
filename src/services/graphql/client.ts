import { ApolloClient, ApolloLink, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  // Run test server by adding https://graphqlzero.almansi.me/api to your .env.developement file 
  uri: process.env.REACT_APP_SERVER_URL,
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});

export default client