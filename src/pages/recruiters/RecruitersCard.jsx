import React from "react";
import { FaUserAlt } from "react-icons/fa";

const RecruitersCard = ({ application }) => {
  const { description, company, hr_email, company_logo } = application || {};
  return (
    <div className="bg-base-100 rounded-2xl shadow-lg p-4 sm:p-6 text-center border-t-4 border-[#3C65F5] flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#3C65F5] mb-2 flex items-center justify-center gap-2">
        <span className="inline-block bg-blue-100 p-2 rounded-full">
          <FaUserAlt className="text-lg sm:text-xl" />
        </span>
        Recruiters
      </h2>
      <p className="text-sm sm:text-base mb-6 italic">{description}</p>
      <div className="flex flex-col gap-4 items-center w-full">
        <div className="flex items-center gap-3 sm:gap-4 bg-base-200 border border-[#3C65F5]/30 rounded-lg px-3 sm:px-5 py-2 sm:py-3 w-full max-w-xs mx-auto shadow-sm hover:shadow-md transition">
          <img
            src={company_logo}
            alt="Recruiter Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white shadow object-cover"
          />
          <div className="text-left">
            <div className="font-semibold text-[#3C65F5] text-base sm:text-lg">
              {company}
            </div>
            <div className="text-xs lg:text-sm break-all">{hr_email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitersCard;
