import React, { Suspense } from "react";
import UseAuth from "../../hooks/UseAuth";
import PostedJob from "../../components/job/PostedJob";
import { jobsCreatedByPromise } from "../../api/JobsCreatedByPromise";
import Spinner from "../../components/ui/Spinner";

const MyPostedJobs = () => {
  const { user } = UseAuth();

  return (
    <div>
      <title>My Jobs || Career Code</title>
      <h3 className="text-4xl font-semibold text-center">My Posted Job</h3>
      <Suspense fallback={<Spinner />}>
        <PostedJob jobsCreatedByPromise={jobsCreatedByPromise(user.email)} />
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
