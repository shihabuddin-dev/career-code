import React, { use, useState } from "react";
import ApplicationRow from "./ApplicationRow";
import Swal from "sweetalert2";
import axios from "axios";

const ApplicationList = ({ myApplicationsPromise }) => {
  const initialApplications = use(myApplicationsPromise);
  const [applications, setApplications] = useState(initialApplications);

  const handleDeleteApplication = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://career-code-server-sigma.vercel.app/applications/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              const remainingApplications = applications.filter(
                (application) => application._id !== id
              );
              setApplications(remainingApplications);
              Swal.fire({
                icon: "success",
                title: "Your Application has been Deleted",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  if (!applications.length) {
    return <p className="text-center text-xl">No Applications data Found</p>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>No.</th>
            <th>Job Details</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((application, i) => (
            <ApplicationRow
              key={i}
              i={i}
              application={application}
              handleDeleteApplication={handleDeleteApplication}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApplicationList;
