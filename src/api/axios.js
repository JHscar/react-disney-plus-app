import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "b21f9c51eb0710c0e17afc84ed6bb3bf",
    language: "ko-KR",
  },
});

export default instance;
