import React from "react";
import { useLoaderData } from "react-router";
import TrendingJobsCard from "./TrendingJobsCard";

const TrendingJobs = () => {
  const jobs = useLoaderData();
  return (
    <div>
      <h3 className="text-4xl font-semibold text-center">Trending Jobs</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
        {jobs?.map((job) => (
          <TrendingJobsCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default TrendingJobs;
