import Todo from "./pages/Todo";
import client from "@/services/graphql/client";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Todo />
    </ApolloProvider>
  );
}

export default App;
