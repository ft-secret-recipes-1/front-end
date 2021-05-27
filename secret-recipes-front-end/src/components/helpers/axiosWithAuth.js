import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: "https://ft-bw-may-secret-family-recipe.herokuapp.com/api",
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
};
