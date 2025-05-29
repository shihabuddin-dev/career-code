import React from "react";
import { Link } from "react-router";
import { FaExclamationTriangle, FaArrowLeft } from "react-icons/fa";
import Button from "../../components/ui/Button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col">
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="flex justify-center">
            <div className="bg-error/20 p-4 rounded-full">
              <FaExclamationTriangle className="h-12 w-12 text-error" />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold text-error">404</h1>
            <h2 className="mt-4 text-2xl font-medium text-base-content">
              Page Not Found
            </h2>
            <p className="mt-2 text-base-content/80">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <Link to="/">
              <Button className="flex justify-center items-center gap-2">
                {" "}
                <FaArrowLeft /> Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
