import React from "react";
import { FiSearch, FiBriefcase, FiMapPin, FiDollarSign } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { Link } from "react-router";
import Button from "../../components/ui/Button";

const FindJobs = () => {
  // Sample job data
  const jobCategories = [
    "UI/UX Design",
    "Web Development",
    "Graphic Design",
    "Product Management",
    "Marketing",
    "Content Writing",
  ];

  const featuredJobs = [
    {
      title: "Senior UX Designer",
      company: "TechCorp",
      location: "San Francisco, CA",
      salary: "$90,000 - $120,000",
      type: "Full-time",
      posted: "2 days ago",
    },
    {
      title: "Frontend Developer",
      company: "WebSolutions",
      location: "Remote",
      salary: "$80,000 - $100,000",
      type: "Full-time",
      posted: "1 week ago",
    },
    {
      title: "Graphic Designer",
      company: "Creative Studio",
      location: "New York, NY",
      salary: "$60,000 - $75,000",
      type: "Contract",
      posted: "3 days ago",
    },
  ];
  const inputBase =
    "block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-base-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h2 className="text-primary text-4xl font-semibold text-center mb-4">
          Find Your Dream Job
        </h2>
        <p className="text-base-content/80 max-w-2xl mx-auto">
          Browse through thousands of full-time and part-time jobs near you
        </p>
      </div>

      {/* Search Bar */}
      <div className="bg-base-100 rounded-lg shadow-md p-6 mb-12">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className={inputBase}
              placeholder="Job title, keywords, or company"
            />
          </div>
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiMapPin className="text-gray-400" />
            </div>
            <input type="text" className={inputBase} placeholder="Location" />
          </div>
          <Button>
            <Link to="/">Search Jobs</Link>{" "}
          </Button>
        </div>
      </div>

      {/* Job Categories */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {jobCategories.map((category, index) => (
            <div
              key={index}
              className="bg-base-100 rounded-lg shadow-sm p-4 text-center hover:shadow-md transition duration-200 cursor-pointer border border-gray-100 hover:border-primary/20"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <FiBriefcase className="text-primary text-xl" />
              </div>
              <h3 className="font-medium">{category}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Jobs */}
      <div>
        <h2 className="text-2xl font-bold mb-8 text-center">Featured Jobs</h2>
        <div className="space-y-6">
          {featuredJobs.map((job, index) => (
            <div
              key={index}
              className="bg-base rounded-lg shadow-md p-6 hover:shadow-lg transition duration-200 border border-gray-100"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-semibold text-primary">
                    {job.title}
                  </h3>
                  <p className="">{job.company}</p>
                </div>
                <button className="bg-primary/10 text-primary font-medium py-2 px-4 rounded-md hover:bg-primary/20 transition duration-200">
                  Apply Now
                </button>
              </div>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center ">
                  <FiMapPin className="mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center ">
                  <FiDollarSign className="mr-2" />
                  <span>{job.salary}</span>
                </div>
                <div className="flex items-center">
                  <FiBriefcase className="mr-2" />
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center ">
                  <FaRegClock className="mr-2" />
                  <span>{job.posted}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/">
            <Button variant="outline">View ALL Jobs</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FindJobs;
