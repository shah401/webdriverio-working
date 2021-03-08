const axios = require("axios").default;

const request = (url, headers, body, params, method) => {
  const config = {
    url,
    method,
    baseURL: "",
    headers,
  };

  if (params) {
    if (method === "get") {
      config.params = params;
    } else {
      config.data = body;
    }
  }

  console.log("===> API Config: ", config);

  return axios.request(config);
};

const get = (url, headers = {}, params = {}) => {
  return request(url, headers, {}, params, "get");
};

const post = (url, headers = {}, body) => {
  return request(url, headers, body, {}, "post");
};

export { get, post };
