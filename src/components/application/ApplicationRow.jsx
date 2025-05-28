import React from "react";
import { MdDeleteForever } from "react-icons/md";

const ApplicationRow = ({ application, i, handleDeleteApplication }) => {
  const { _id, company_logo, company, title, applicant } = application || {};

  return (
    <tr>
      <th>{i + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={company_logo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{company}</div>
            <div className="text-sm opacity-50">{title}</div>
          </div>
        </div>
      </td>
      <td>{applicant}</td>
      <td>Active</td>
      <th>
        <button
          onClick={() => handleDeleteApplication(_id)}
          className="text-2xl text-red-500 cursor-pointer"
        >
          <MdDeleteForever />
        </button>
      </th>
    </tr>
  );
};

export default ApplicationRow;
