import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRouter";
import UserProvider from "./context/UserProvider";

import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";

const App = () => {
  const userData = useContext(UserProvider.context);
  console.log("user", userData);
  return (
    <Router>
      <Route exact path="/">
        {userData?.user ? <Redirect to="/dashboard" /> : <LoginForm />}
      </Route>
      <PrivateRoute path="/dashboard">
        <Dashboard />
      </PrivateRoute>
    </Router>
  );
};

export default App;
