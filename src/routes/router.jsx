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
import Spinner from "../components/ui/Spinner";
import Contact from "../pages/contact/Contact";
import FindJobs from "../pages/findJobs/FindJobs";
import Recruiters from "../pages/recruiters/Recruiters";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        hydrateFallbackElement: <Spinner />,
        loader: () => fetch("http://localhost:3000/jobs"),
        Component: Home,
      },
      {
        path: "/jobs/:id",
        hydrateFallbackElement: <Spinner />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
        Component: JobDetails,
      },
      {
        path: '/contact',
        Component: Contact
      },
      {
        path: '/find-job',
        Component: FindJobs
      },
      {
        path: '/Recruiters',
         hydrateFallbackElement: <Spinner />,
        loader: () => fetch("http://localhost:3000/jobs"),
        Component: Recruiters
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
