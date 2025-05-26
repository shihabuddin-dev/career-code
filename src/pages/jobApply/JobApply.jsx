import React from "react";
import { useParams } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import Button from "../../components/ui/Button";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = UseAuth();

  const handleApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const applicantInfo = Object.fromEntries(formData.entries());
    // const { linkedIn, resume, github, portfolio } = Object.fromEntries(
    //   formData.entries()
    // );

    const application = {
      jobId: id,
      applicant: user.email,
      applicantInfo,
    };
    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Your application has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "failed to submit application",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <h2 className="text-center text-3xl font-semibold">Apply here</h2>
      <form
        onSubmit={handleApply}
        className="space-y-3 mt-6 max-w-md mx-auto border p-4"
      >
        <input
          type="url"
          name="linkedIn"
          placeholder="LinkedIn URL"
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="url"
          name="resume"
          placeholder="Resume Link"
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="url"
          name="portfolio"
          placeholder="Portfolio Link"
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          name="github"
          placeholder="GitHub Profile"
          className="w-full border rounded px-3 py-2"
          required
        />
        <Button type="submit" className="w-full">
          Submit Application
        </Button>
      </form>
    </div>
  );
};

export default JobApply;
