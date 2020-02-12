import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./index.css";

import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  dataIdFromObject: object => object.key || null
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/">
          <LoginForm />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
