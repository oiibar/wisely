import axios from "axios";
import { getToken } from "../helpers/localstorage.helper";

export const instance = axios.create({
  baseURL: "https://wisely-serv.onrender.com/api",
  headers: {
    Authorization: "Bearer " + getToken(),
  },
});
