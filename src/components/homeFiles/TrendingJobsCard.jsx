import React from "react";
import Button from "../ui/Button";
import { Link } from "react-router";
import { MdShareLocation } from "react-icons/md";

const TrendingJobsCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    salaryRange,
    company,
    company_logo,
    applicationDeadline,
    requirements,
  } = job || {};

  // Format salary range
  const formattedSalary = salaryRange
    ? `${salaryRange.currency.toUpperCase()} ${salaryRange.min.toLocaleString()} - ${salaryRange.max.toLocaleString()}`
    : "Salary not specified";

  // Format deadline
  const formattedDeadline = applicationDeadline
    ? new Date(applicationDeadline).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "No deadline";

  return (
    <div className="relative  rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {/* Company Logo and Basic Info */}
      <div className="p-4 flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            src={company_logo || "https://via.placeholder.com/50"}
            alt={company}
            className="w-12 h-12 object-contain rounded-full border border-gray-200"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold truncate">{title}</h3>
          <p className="text-sm ">{company}</p>
          <p className="text-sm mt-1 flex gap-1 items-center">
            <MdShareLocation /> {location}
          </p>
        </div>
      </div>

      {/* Job Details */}
      <div className="px-4 pb-4 flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
            {jobType}
          </span>
          <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
            {formattedSalary}
          </span>
        </div>

        {/* Requirements (showing first 3) */}
        {requirements && requirements.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium mb-1">Skills:</h4>
            <div className="flex flex-wrap gap-2">
              {requirements.slice(0, 3).map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded"
                >
                  {skill}
                </span>
              ))}
              {requirements.length > 3 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                  +{requirements.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        <div className="text-xs">
          <p>Apply by: {formattedDeadline}</p>
        </div>
      </div>

      {/* Action Button */}
      <div className="px-4 pb-4">
        <Link to={`job/${_id}`}>
          {" "}
          <Button> View Details</Button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingJobsCard;
