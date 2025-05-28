import React from "react";
import { Link, useLoaderData } from "react-router";
import Button from "../../components/ui/Button";

const JobDetails = () => {
  const {
    _id,
    title,
    company,
    company_logo,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    requirements,
    responsibilities,
    hr_email,
    hr_name,
  } = useLoaderData();
  return (
    <div className="max-w-3xl mx-auto mt-12 p-8 bg-base-200 rounded-2xl flex flex-col items-center space-y-6">
      <div className="flex flex-col items-center space-y-2">
        <img
          src={company_logo}
          alt={company}
          className="w-16 h-16 rounded-full shadow-lg border-4 border-white bg-white object-cover"
        />
        <h2 className="text-3xl font-semibold drop-shadow-lg">{title}</h2>
        <h3 className="text-2xl font-semibold text-primary">{company}</h3>
        <div className="flex flex-wrap gap-4 justify-center mt-2">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            {location}
          </span>
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            {jobType}
          </span>
          <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      <div className="w-full text-left space-y-4">
        <div>
          <h4 className="text-lg font-semibold mb-1">Job Description</h4>
          <p>{description}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-1">Requirements</h4>
            <ul className="list-disc list-inside">
              {requirements &&
                requirements.map((req, idx) => <li key={idx}>{req}</li>)}
            </ul>
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold mb-1">Responsibilities</h4>
            <ul className="list-disc list-inside ">
              {responsibilities &&
                responsibilities.map((res, idx) => <li key={idx}>{res}</li>)}
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-6 mt-4">
          <div>
            <span className="block text-sm">Salary Range</span>
            <span className="font-semibold">
              {salaryRange?.min} - {salaryRange?.max}{" "}
              {salaryRange?.currency?.toUpperCase()}
            </span>
          </div>
          <div>
            <span className="block text-sm">Application Deadline</span>
            <span className="font-semibold">{applicationDeadline}</span>
          </div>
        </div>
        <div className="mt-4">
          <span className="block text-sm">HR Contact</span>
          <span className="font-semibold">
            {hr_name} ({hr_email})
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-6 w-full">
        <Link to={`/job-apply/${_id}`}>
          <Button variant="outline">Apply Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
