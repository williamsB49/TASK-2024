import axios from "axios";

const getAllUrlData = async (authorizationToken) => {
  try {
    const response = await axios.get(process.env.REACT_APP_GET_ALLURL_API, {
      headers: {
        Authorization: `BEARER ${authorizationToken}`,
      },
    });
    return response;
  } catch (e) {
    return e.response;
  }
};

export default getAllUrlData;
