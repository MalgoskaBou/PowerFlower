import React, { createContext, useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import currentUserQuery from "../../queries/currentUser";
const context = createContext(null);

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const { loading, data } = useQuery(currentUserQuery);

  useEffect(() => {
    setUserData({ user: data?.currentUser, loading });
  }, [loading, data]);

  return <context.Provider value={userData}>{children}</context.Provider>;
};

UserProvider.context = context;

export default UserProvider;
