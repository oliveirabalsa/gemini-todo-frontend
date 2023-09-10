import { env } from "@/config";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: env.REACT_APP_GRAPHQL_URL,
  cache: new InMemoryCache(),
});

export default client;
