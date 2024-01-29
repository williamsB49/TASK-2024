import axios from "axios";

const ResetPasswordFunc = async (body, authorizationToken) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_RESETPASSWORD_API,
      body,
      {
        headers: {
          Authorization: `BEARER ${authorizationToken}`,
        },
      }
    );
    return response;
  } catch (e) {
    return e.response;
  }
};
export default ResetPasswordFunc;
