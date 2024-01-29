import axios from "axios";

const EmailActivationFunc = async (body) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_EMAILACTIVATION_API,
      body
    );
    return response;
  } catch (e) {
    return e.response;
  }
};

export default EmailActivationFunc;
