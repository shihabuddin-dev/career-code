import React, { use } from "react";

const PostedJob = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);
  console.log(jobs);
  return (
    <div className="overflow-x-auto mt-8 rounded-box border border-base-content/5 bg-base-100">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No.</th>
            <th>HR Name</th>
            <th>Company</th>
            <th>job Type</th>
          </tr>
        </thead>
        <tbody>
          {/* row */}
          {jobs?.map((job, i) => (
            <tr key={i}>
              <th>{i + 1}</th>
              <td>{job.hr_name} </td>
              <td>{job.company}</td>
              <td>{job.jobType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostedJob;
