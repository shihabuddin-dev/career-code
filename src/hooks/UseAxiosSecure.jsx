import axios from "axios";
import UseAuth from "./UseAuth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const UseAxiosSecure = () => {
  const { user, logOutUser } = UseAuth();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${user.accessToken}`;
    return config;
  });
  
  // response interceptor
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.status === 401 || error.status === 403) {
        logOutUser()
          .then(() => {
            console.log("sign out user for status 401");
          })
          .catch((error) => {
            console.log(error);
          });
      }
      console.log("error in interceptor", error);
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default UseAxiosSecure;
