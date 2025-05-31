import React from "react";
import UseAxiosSecure from "./UseAxiosSecure";

const UseApplicationApi = () => {
  const axiosSecure = UseAxiosSecure();
  const myApplicationsPromise = (email) => {
    return axiosSecure
      .get(`/applications?email=${email}`)
      .then((res) => res.data);
  };
  return { myApplicationsPromise };
};

export default UseApplicationApi;
