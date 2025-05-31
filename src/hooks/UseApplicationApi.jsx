import React from "react";
import UseAxiosSecure from "./UseAxiosSecure";

const UseApplicationApi = () => {
  const axiosSecure = UseAxiosSecure();
  const myApplicationsPromise = async (email) => {
    const res = await axiosSecure.get(`/applications?email=${email}`);
    return res.data;
  };
  return { myApplicationsPromise };
};

export default UseApplicationApi;
