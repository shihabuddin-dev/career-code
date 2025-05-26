import React from "react";
import { Link, useLoaderData } from "react-router";
import Button from "../../components/ui/Button";

const JobDetails = () => {
  const { _id, title, company } = useLoaderData();
  return (
    <div className="space-y-4 text-center">
      <h2 className="text-3xl font-semibold">{title}</h2>
      <h2 className="text-2xl font-semibold">Company: {company}</h2>
      <Link to={`/job-apply/${_id}`}>
        <Button variant="outline">Apply Now</Button>
      </Link>
    </div>
  );
};

export default JobDetails;
