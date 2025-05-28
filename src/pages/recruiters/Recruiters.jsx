import React from "react";
import { useLoaderData } from "react-router";
import RecruitersCard from "./RecruitersCard";

const Recruiters = () => {
  const applications = useLoaderData();
  return (
    <div>
      <h3 className="text-4xl font-semibold text-center mb-8">Recruiters</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {applications.map((application) => (
          <RecruitersCard key={application._id} application={application} />
        ))}
      </div>
    </div>
  );
};

export default Recruiters;
