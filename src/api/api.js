import axios from "axios";

export default () => {
  const fetchCreator = method => (url, options) => {
    return axios[method](`/${url}`, options).then(data => data);
  };

  return {
    get: fetchCreator("get"),
    post: fetchCreator("post"),
    patch: fetchCreator("patch"),
    delete: fetchCreator("delete"),
    put: fetchCreator("put")
  };
};
