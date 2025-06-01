import React, { Suspense } from "react";
import UseAuth from "../../hooks/UseAuth";
import ApplicationStatus from "../../components/application/ApplicationStatus";
import ApplicationList from "../../components/application/ApplicationList";
import Spinner from "../../components/ui/Spinner";
import UseApplicationApi from "../../hooks/UseApplicationApi";

const MyApplication = () => {
  const { user } = UseAuth();
  const { myApplicationsPromise } = UseApplicationApi();

  return (
    <div className="space-y-8">
      <title>My Application || Career Code</title>
      <h3 className="text-4xl font-semibold text-center">My Application</h3>
      <div className="max-w-3xl mx-auto">
        <ApplicationStatus />
      </div>

      <Suspense fallback={<Spinner />}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        />
      </Suspense>
    </div>
  );
};

export default MyApplication;
