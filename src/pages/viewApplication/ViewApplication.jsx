import React from "react";
import { useLoaderData } from "react-router";

const ViewApplication = () => {
  const applications = useLoaderData();
  return <div>applications {applications.length}</div>;
};

export default ViewApplication;
