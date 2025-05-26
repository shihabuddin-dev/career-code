import React, { use } from "react";
import ApplicationRow from "./ApplicationRow";

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);
  console.log(applications);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Job Details</th>
            <th>Email</th>
            <th>Favorite Color</th>
            <th>More</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, i) => (
            <ApplicationRow key={i} i={i} application={application} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationList;
