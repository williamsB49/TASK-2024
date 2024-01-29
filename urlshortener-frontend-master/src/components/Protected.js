import useAuth from "../hooks/useAuth";

const Protected = ({ children, redirect }) => {
  const [, , authCheck] = useAuth();

  return authCheck() ? children : redirect;
};

export default Protected;
