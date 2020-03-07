import React, { createContext, useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import currentUserQuery from "../../queries/currentUser";
const context = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { loading, data } = useQuery(currentUserQuery);

  useEffect(() => {
    setUser({ user: data?.currentUser, loading });
  }, [loading, data]);

  return <context.Provider value={user}>{children}</context.Provider>;
};

UserProvider.context = context;

export default UserProvider;
