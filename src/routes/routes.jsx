import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import ResetPassword from "../pages/ResetPassword/ResetPassword";
import Dashboard from "../Layout/Dashboard";
import Bookings from "../pages/dashboard/Bookings/Bookings";
import Hotels from "../pages/dashboard/Hotels/Hotels";
import Rooms from "../pages/dashboard/Rooms/Rooms";
import Reports from "../pages/dashboard/Reports/Reports";
import PrivateRoutes from "../providers/PrivateRoutes";
import AdminPrivate from "./AdminPrivate";
import RoomDetails from "../pages/RoomDetails/RoomDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/room/:id",
        element: <RoomDetails />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <Login />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  // Dashboard
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
    children: [
      {
        index: true,
        element: <Bookings />,
      },
      {
        path: "hotels",
        element: (
          <AdminPrivate>
            <Hotels />
          </AdminPrivate>
        ),
      },
      {
        path: "rooms",
        element: (
          <AdminPrivate>
            <Rooms />
          </AdminPrivate>
        ),
      },
      {
        path: "reports",
        element: (
          <AdminPrivate>
            <Reports />
          </AdminPrivate>
        ),
      },
    ],
  },
]);

export default router;
