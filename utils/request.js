import axios from "axios";

import get from "lodash/get";

const Request = (url, params, method, data, loginRequired, contentType) => {
// const Request = (url:string, params:any, method:any, data:any, loginRequired:boolean, contentType:string) => {
  const baseURL = "https://60e2be589103bd0017b47506.mockapi.io";

  const headers = {
    "Content-Type": `${contentType};charset=utf-8`
  };

  if (loginRequired) {
    // headers = {...headers, 'Authorization': 'Token ' + store.auth.token};
  }

  const request = {
    url,
    method,
    baseURL,
    headers,
    params,
    data
  };

  const instance = axios.create({ timeout: 30000 });

  return instance(request)
    .then((response) => {
      if (get(response, "status")) {
        if (get(response, "status") >= 300) {
          return Promise.reject({ response });
        }
      } else if (!response.data.scope) {
        return Promise.reject({ response });
      }

      return response.data;
    })
    .catch((error) => {
      console.log(error);

      return Promise.reject({
        errorType: "REQUEST_FAILED",
        detail: error
      });
    })
};

export default Request;