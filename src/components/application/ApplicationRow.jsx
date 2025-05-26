import React from "react";

const ApplicationRow = ({ application, i }) => {
  const { company_logo, company, title, applicant } = application || {};
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
      <td>Purple</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default ApplicationRow;
