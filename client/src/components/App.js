import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import PrivateRoute from "./PrivateRouter";
import UserProvider from "./context/UserProvider";

import LoginForm from "../pages/loginScreen/LoginForm";
import Dashboard from "../pages/dashboard/Dashboard";
import ZoneContent from "../pages/zoneContent/ZoneContent";

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
        <PrivateRoute exact path="/zones/:zoneID">
          <ZoneContent />
        </PrivateRoute>
        <Route path="*">
          <div>No page - 404</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
