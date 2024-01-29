import axios from "axios";

const SigninFunc = async (body) => {
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNIN_API, body);
    return response;
  } catch (e) {
    return e.response;
  }
};
export default SigninFunc;
