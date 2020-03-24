import { request } from "./request";

export const login = (phone, password, timestamp) =>
  request("/login/cellphone", { phone, password, timestamp });

export const getUserDetail = uid => request("/user/detail", { uid });
