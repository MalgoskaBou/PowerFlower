import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import PrivateRoute from "./components/PrivateRouter";
import "./index.css";

import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

const client = new ApolloClient({
  uri: "https://powerflowerbe.herokuapp.com/graphql"
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/">
          <LoginForm />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
