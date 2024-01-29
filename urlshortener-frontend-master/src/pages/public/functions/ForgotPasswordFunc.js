import axios from "axios";

const ForgotPasswordFunc = async (body) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_FORGOTPASSWORD_API,
      body
    );
    return response;
  } catch (e) {
    return e.response;
  }
};
export default ForgotPasswordFunc;
