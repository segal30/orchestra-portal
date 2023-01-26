import React from "react";
import "./app.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Calendar from "./components/pages/calendar/Calendar";
import Inbox from "./components/pages/inbox/Inbox";
import UserList from "./components/pages/UserList/UserList";
import User from "./components/pages/user/User";
import { NewUser } from "./components/pages/newUser/NewUser";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const Layout = () => {
    return (
      <div>
        <Topbar />
        <div style={{ display: "flex" }}>
          <Sidebar />
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/calendar",
          element: <Calendar />,
        },
        {
          path: "/inbox",
          element: <Inbox />,
        },

        {
          path: "/users",
          element: <UserList />,
        },
        {
          path: "/user/:userId",
          element: <User />,
        },
        {
          path: "/newUser",
          element: <NewUser />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
