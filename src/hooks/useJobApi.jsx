import React from "react";
import UseAxiosSecure from "./UseAxiosSecure";

const useJobApi = () => {
  const axiosSecure = UseAxiosSecure();
  const jobsCreatedByPromise = async (email) => {
    const res = await axiosSecure.get(`/jobs/applications?email=${email}`);
    return res.data;
  };
  return { jobsCreatedByPromise };
};

export default useJobApi;
