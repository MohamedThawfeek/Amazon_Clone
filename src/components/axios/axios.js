import axios from "axios";

const instance = axios.create({
  baseURL: "https://my-first-mern-app-a-c.herokuapp.com",
});

export default instance;
