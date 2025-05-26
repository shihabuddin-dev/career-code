import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/SignIn";
import SignUp from "../pages/auth/SignUp";
import ResetPassword from "../pages/auth/ResetPassword";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoutes from "./PrivateRoutes";
import JobApply from "../pages/jobApply/JobApply";
import MyApplication from "../pages/myApplication/MyApplication";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch("http://localhost:3000/jobs"),
        Component: Home,
      },
      {
        path: "/jobs/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
        Component: JobDetails,
      },

      { path: "/signin", Component: SignIn },
      { path: "/signup", Component: SignUp },
      { path: "/reset-password", Component: ResetPassword },
      // { path: '/blogs', Component: Blogs },

      // private routes
      {
        path: "/job-apply/:id",
        element: (
          <PrivateRoutes>
            <JobApply />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-application",
        element: (
          <PrivateRoutes>
            <MyApplication />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
