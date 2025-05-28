import React from "react";
import Button from "../../components/ui/Button";
import { MdWork } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const inputBase =
  "w-full border-2 border-base-content/20 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition duration-200 bg-base-100 text-base-content";

const AddJob = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new window.FormData(form);
    const jobData = Object.fromEntries(formData.entries());
    // Parse salary fields and arrays
    jobData.salaryRange = {
      min: parseInt(jobData.salaryMin),
      max: parseInt(jobData.salaryMax),
      currency: jobData.currency,
    };
    jobData.requirements = jobData.requirements
      ? jobData.requirements.split(",").map((req) => req.trim())
      : [];
    jobData.responsibilities = jobData.responsibilities
      ? jobData.responsibilities.split(",").map((res) => res.trim())
      : [];
    jobData.status = "active";
    // Remove flat salary fields
    delete jobData.salaryMin;
    delete jobData.salaryMax;
    delete jobData.currency;

    // You may want to handle errors here
    axios
      .post("http://localhost:3000/jobs", jobData)
      .then((res) => {
        if (res.data.insertedId) {
          navigate("/");
          Swal.fire({
            icon: "success",
            title: "Job Submitted!",
            text: "Your Job has been successfully submitted.",
            showConfirmButton: false,
            timer: 2000,
            background: "#f8fafc",
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Submission Failed",
          text: "Please try again or contact support.",
          confirmButtonColor: "#6366f1",
          background: "#f8fafc",
        });
      });
  };

  return (
    <div className="flex gap-4 flex-col md:flex-row justify-center items-center max-w-5xl mx-auto min-h-[80vh]">
      <title>Add Job || Career Code</title>

      <div className="flex-1  p-6 bg-base-100 rounded shadow border-2 border-secondary">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex justify-center items-center gap-3 text-base-content">
          <MdWork className="text-primary" />
          Add Job
        </h2>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-base-content">
                Job Title
              </label>
              <input
                name="title"
                className={inputBase}
                placeholder="Job Title"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-base-content">
                Location
              </label>
              <input
                name="location"
                className={inputBase}
                placeholder="Location"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-base-content">
                Job Type
              </label>
              <select
                name="jobType"
                className={inputBase}
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select Job Type
                </option>
                <option value="Intern">Intern</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-base-content">
                Category
              </label>
              <input
                name="category"
                className={inputBase}
                placeholder="Category"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-base-content">
                Application Deadline
              </label>
              <input
                type="date"
                name="applicationDeadline"
                min={new Date().toISOString().split("T")[0]}
                className={inputBase}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-base-content">
                Currency
              </label>
              <select name="currency" className={inputBase} required>
                <option value="bdt">BDT - Bangladeshi Taka</option>
                <option value="usd">USD - US Dollar</option>
                <option value="eur">EUR - Euro</option>
                <option value="inr">INR - Indian Rupee</option>
                <option value="gbp">GBP - British Pound</option>
                <option value="cad">CAD - Canadian Dollar</option>
                <option value="aud">AUD - Australian Dollar</option>
                <option value="jpy">JPY - Japanese Yen</option>
                <option value="cny">CNY - Chinese Yuan</option>
                <option value="sgd">SGD - Singapore Dollar</option>
                <option value="others">Others</option>
              </select>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-base-content">
                Min Salary
              </label>
              <input
                type="number"
                name="salaryMin"
                className={inputBase}
                placeholder="Min Salary"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-base-content">
                Max Salary
              </label>
              <input
                type="number"
                name="salaryMax"
                className={inputBase}
                placeholder="Max Salary"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-base-content">
                Company
              </label>
              <input
                name="company"
                className={inputBase}
                placeholder="Company"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-base-content">
                HR Email
              </label>
              <input
                name="hr_email"
                type="email"
                className={inputBase}
                placeholder="HR Email"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-base-content">
                HR Name
              </label>
              <input
                name="hr_name"
                className={inputBase}
                placeholder="HR Name"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-base-content">
                Company Logo URL
              </label>
              <input
                name="company_logo"
                className={inputBase}
                placeholder="Company Logo URL"
              />
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-base-content">
              Description
            </label>
            <textarea
              name="description"
              className={inputBase}
              placeholder="Description"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-base-content">
              Requirements (comma separated)
            </label>
            <textarea
              name="requirements"
              className={inputBase}
              placeholder="Requirements (comma separated)"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-base-content">
              Responsibilities (comma separated)
            </label>
            <textarea
              name="responsibilities"
              className={inputBase}
              placeholder="Responsibilities (comma separated)"
            />
          </div>
          <Button type="submit" className="w-full mt-2">
            Submit Job
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
