import axios from "axios";
import { getToken } from "../helpers/localstorage.helper";

export const instance = axios.create({
  baseURL: "https://wisely-serv.onrender.com/api",
  // baseURL: "https://wisely-production.up.railway.app/api",
  headers: {
    Authorization: "Bearer " + getToken(),
  },
});
