import React, { Suspense } from "react";
import UseAuth from "../../hooks/UseAuth";
import PostedJob from "../../components/job/PostedJob";
import Spinner from "../../components/ui/Spinner";
import useJobApi from "../../hooks/useJobApi";

const MyPostedJobs = () => {
  const { user } = UseAuth();
  const { jobsCreatedByPromise } = useJobApi();

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

