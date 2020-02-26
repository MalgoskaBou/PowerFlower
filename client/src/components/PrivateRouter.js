import React from "react";
import { Route, Redirect } from "react-router-dom";
import currentUserQuery from "../queries/currentUser";
import { useQuery } from "@apollo/react-hooks";

function PrivateRoute({ children, ...rest }) {
  const { data } = useQuery(currentUserQuery);

  return (
    <Route
      {...rest}
      render={() =>
        data?.currentUserQuery ? (
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
