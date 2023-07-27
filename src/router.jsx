import { Navigate, createBrowserRouter } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Users from "./views/Users";
import NotFound from "./views/NotFound";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Dashboard from "./views/Dashboard";

const router = createBrowserRouter([
  {
    path: "/react-education/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/react-education/",
        element: <Navigate to="/react-education/users" />,
      },
      {
        path: "/react-education/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/react-education/users",
        element: <Users />,
      },
    ],
  },
  {
    path: "/react-education/",
    element: <GuestLayout />,
    children: [
      {
        path: "/react-education/login",
        element: <Login />,
      },
      {
        path: "/react-education/signup",
        element: <Signup />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
