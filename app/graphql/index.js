"use client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://factual-iguana-40.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});

export const GraphProvider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
