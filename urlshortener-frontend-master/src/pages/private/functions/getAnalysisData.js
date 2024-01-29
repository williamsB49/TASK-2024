import axios from "axios";

const getAnalysisData = async (authorizationToken) => {
  try {
    const response = await axios.get(process.env.REACT_APP_URL_ANALYSIS_API, {
      headers: {
        Authorization: `BEARER ${authorizationToken}`,
      },
    });
    return response;
  } catch (e) {
    return e.response;
  }
};

export default getAnalysisData;
