import React, { use } from "react";
import { Link } from "react-router";

const PostedJob = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  if (jobs.length === 0) {
    return <p className="text-center text-xl mt-4">No Posted Jobs Found</p>;
  }
  return (
    <div className="overflow-x-auto mt-8 rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Job Title</th>
            <th>Deadline</th>
            <th>Count</th>
            <th>Job Type</th>
            <th>View Application</th>
          </tr>
        </thead>
        <tbody>
          {/* row */}
          {jobs?.map((job, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>{job.title} </td>
              <td>{job.applicationDeadline}</td>
              <td>{job.application_count} </td>
              <td>{job.jobType}</td>
              <td className="hover:underline text-primary">
                <Link to={`/applications/${job._id}`}>View Application</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostedJob;
