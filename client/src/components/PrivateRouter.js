import React from "react";
import { Route, Redirect } from "react-router-dom";
import currentUserQuery from "../queries/currentUser";
import { useQuery } from "@apollo/react-hooks";

function PrivateRoute({ children, ...rest }) {
  const { loading, data } = useQuery(currentUserQuery);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <Route
      {...rest}
      render={() =>
        data?.currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/"
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
