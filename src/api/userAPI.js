import ApiCreator from "./api";
const api = ApiCreator();

export const signInApi = async data => {
  try {
    return await api.post("api/user/login", data);
  } catch (error) {
    return error.response.data;
  }
};
