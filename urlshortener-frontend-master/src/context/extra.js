import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

const useGetToken = () => {
  const [tokenState, setTokenState] = useState(() => {
    const initalValue = localStorage.getItem("token");
    return JSON.parse(initalValue) || null;
  });

  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(tokenState));
  }, [tokenState]);

  const updateToken = (newValue) => {
    return setTokenState(newValue);
  };

  return [tokenState, updateToken];
};

const useGetUser = () => {
  const [userState, setUserState] = useState(() => {
    const userObj = localStorage.getItem("user");
    return userObj ? JSON.parse(userObj) : null;
  });
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userState));
  }, [userState]);

  const updateUser = (newValue) => {
    return setUserState(newValue);
  };
  return [userState, updateUser];
};

const UserProvider = ({ children }) => {
  const [tokenState, updateToken] = useGetToken();
  const [userState, updateUser] = useGetUser();

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
