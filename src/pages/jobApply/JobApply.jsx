import React from "react";
import { useParams } from "react-router";
import UseAuth from "../../hooks/UseAuth";
import Button from "../../components/ui/Button";

const JobApply = () => {
  const { id } = useParams();
  const { user } = UseAuth();
  console.log(id, user);
  const handleApply = (e) => {
    e.preventDefault();
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const info = Object.fromEntries(formData.entries());
    console.log(info);
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
