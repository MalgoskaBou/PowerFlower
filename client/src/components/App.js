import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import PrivateRoute from "./PrivateRouter";
import UserProvider from "./context/UserProvider";

import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";

const App = () => {
  const userData = useContext(UserProvider.context);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {userData?.user ? <Redirect to="/dashboard" /> : <LoginForm />}
        </Route>
        <PrivateRoute exact path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <Route path="*">
          <div>No page</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
