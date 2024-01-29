import React, { createContext } from "react";

import useGetValues from "../hooks/useGetValues";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [tokenState, updateToken] = useGetValues("token");
  const [userState, updateUser] = useGetValues("user");

  const authCheck = () => {
    return (tokenState && userState) !== null ? true : false;
  };

  const values = {
    tokenState,
    updateToken,
    authCheck,
    userState,
    updateUser,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
