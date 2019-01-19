import ApiCreator from "./api";
import { BASE_URL } from "../config";
const api = ApiCreator(BASE_URL);

export const signInApi = email => api.get(`user?email=${email}`);

export const signUnApi = data =>
  api.post("user", {
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
