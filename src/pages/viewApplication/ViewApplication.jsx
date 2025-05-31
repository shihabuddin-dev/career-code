import axios from "axios";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const applications = useLoaderData();
  
  const handleStatusChange = (e, app_id) => {
    axios
      .patch(
        `http://localhost:3000/applications/${app_id}`,
        {
          status: e.target.value,
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Application Status has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h3 className="text-4xl font-semibold text-center mb-8">Applications</h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>Email</th>
              <th>Profile</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row */}
            {applications?.map((application, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{application.applicant}</td>
                <td className="text-primary">
                  <a href={application.applicantInfo.resume}>Resume</a> <br />
                  <a href={application.applicantInfo.portfolio}>portfolio</a>
                </td>
                <td>
                  <select
                    onChange={(e) => handleStatusChange(e, application._id)}
                    defaultValue={application.status}
                    className="select w-full border-2 border-base-content/20 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition duration-200 bg-base-100 text-base-content"
                  >
                    <option disabled={true}>Update Status</option>
                    <option>Pending</option>
                    <option>InterView</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
