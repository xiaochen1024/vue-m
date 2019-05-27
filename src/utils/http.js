import axios from "axios";
import { Toast } from "vant";
import queryString from "query-string";

axios.defaults.timeout = 5000;
axios.defaults.baseURL = process.env.VUE_APP_BASE_API;
axios.defaults.headers.common.Accept = "application/json";
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

function normalizeContentyType(headers) {
  const contentType = headers && headers["Content-Type"];
  return contentType || "application/x-www-form-urlencoded";
}

axios.interceptors.response.use(
  response => {
    const { code, msg } = response.data;
    if (code !== 0) {
      Toast(msg);
    }
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export function fetch(url, params, config) {
  config = Object.assign({}, config);
  return axios.get(url, { params }, config);
}

export function post(url, params, config) {
  config = Object.assign({}, config);
  const contentType = normalizeContentyType(config.headers);

  switch (contentType) {
    case "application/x-www-form-urlencoded":
      params = queryString.stringify(params);
      break;
    case "application/json":
      params = JSON.stringify(params);
      break;
    default:
      break;
  }

  return axios.post(url, params, config);
}

export function put(url, params = {}, config) {
  config = Object.assign({}, config);
  return axios.put(url, queryString.stringify(params), config);
}
