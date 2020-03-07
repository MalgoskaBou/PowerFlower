import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./components/App";
import UserProvider from "./components/context/UserProvider";
import "./index.css";

const client = new ApolloClient({
  credentials: "include",
  uri: "http://localhost:4000/graphql"
});

const Root = () => (
  <ApolloProvider client={client}>
    <UserProvider>
      <App />
    </UserProvider>
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.querySelector("#root"));
