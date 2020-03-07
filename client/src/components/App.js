import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import PrivateRoute from "./PrivateRouter";

import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";

const client = new ApolloClient({
  credentials: "include",
  uri: "http://localhost:4000/graphql"
});

const App = () => {
  const loggedIn = false;
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/">
          {loggedIn ? <Redirect to="/dashboard" /> : <LoginForm />}
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
      </Router>
    </ApolloProvider>
  );
};

export default App;
