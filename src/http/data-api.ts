import axios from "axios";

export const dataApi = axios.create({
  baseURL: "http://www.omdbapi.com/",
  params: {
    apikey: import.meta.env.VITE_APIKEY,
  },
});
