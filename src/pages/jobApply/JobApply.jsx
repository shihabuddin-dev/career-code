import { useNavigate, useParams } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import Button from "../../components/ui/Button";
import axios from "axios";
import Swal from "sweetalert2";
import { MdWork } from "react-icons/md";
import Lottie from "lottie-react";
import jobApply from "../../assets/lotti/jobApply.json";

const inputBase =
  "w-full border-2 border-base-content/20 px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition duration-200 bg-base-100 text-base-content";

const JobApply = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = UseAuth();

  const handleApply = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const applicantInfo = Object.fromEntries(formData.entries());

    const application = {
      jobId: id,
      applicant: user.email,
      applicantInfo,
    };

    axios
      .post("http://localhost:3000", application)
      .then((res) => {
        if (res.data.insertedId) {
          navigate("/my-application");
          Swal.fire({
            icon: "success",
            title: "Application Submitted!",
            text: "Your application has been successfully submitted.",
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
    <div className="flex gap-4 flex-col md:flex-row justify-center items-center max-w-5xl mx-auto p-4">
      <title>Job Application || Career Code</title>
      <div className="">
        <Lottie
          animationData={jobApply}
          className="w-full h-[200px] md:h-[300px]"
        />
      </div>
      <div className="flex-1 max-w-md p-6 bg-base-100 rounded shadow border-2 border-secondary">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 flex justify-center items-center gap-2 md:gap-3 text-base-content">
          <MdWork className="text-primary" />
          Job Application
        </h2>
        <form onSubmit={handleApply} className="space-y-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-base-content">
              LinkedIn Profile
            </label>
            <input
              type="url"
              name="linkedIn"
              className={inputBase}
              placeholder="https://linkedin.com/in/yourprofile"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-base-content">
              Resume/CV Link
            </label>
            <input
              type="url"
              name="resume"
              className={inputBase}
              placeholder="https://drive.google.com/yourresume"
              required
            />
            <p className="text-xs text-base-content/50 mt-1">
              Google Drive, Dropbox, or personal website link
            </p>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-base-content">
              Portfolio Website
            </label>
            <input
              type="url"
              name="portfolio"
              className={inputBase}
              placeholder="https://yourportfolio.com"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-base-content">
              GitHub Profile
            </label>
            <input
              type="text"
              name="github"
              className={inputBase}
              placeholder="https://github.com/username"
              required
            />
          </div>

          <Button type="submit" className="w-full mt-4">
            Submit Application
          </Button>
        </form>

        <p className="text-sm mt-4 text-base-content">
          Need help with your application?{" "}
          <a href="/contact" className="text-primary underline">
            Contact support
          </a>
        </p>
      </div>
    </div>
  );
};

export default JobApply;
