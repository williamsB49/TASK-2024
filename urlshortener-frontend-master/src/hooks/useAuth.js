import { useContext } from "react";

import { UserContext } from "../context/UserProvider";

const useAuth = () => {
  const user = useContext(UserContext);

  return [user.tokenState, user.updateToken, user.authCheck];
};

export default useAuth;
