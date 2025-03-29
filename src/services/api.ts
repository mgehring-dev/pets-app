import axios from "axios";

const api = axios.create({
  baseURL: "https://petsapi-dev-ajf3b6c5c2cveggg.brazilsouth-01.azurewebsites.net/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
