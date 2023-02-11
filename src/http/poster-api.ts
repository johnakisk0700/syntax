import axios from "axios";

export const imgApi = axios.create({
  baseURL: "http://img.omdbapi.com/",
  params: {
    apikey: import.meta.env.VITE_APIKEY,
  },
});
