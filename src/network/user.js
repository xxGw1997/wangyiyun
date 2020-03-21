import { request } from "./request";

export const login = (phone, password) =>
  request("/login/cellphone", { phone, password });

export const getUserDetail = uid => request("/user/detail", { uid });
