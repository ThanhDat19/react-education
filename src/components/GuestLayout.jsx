import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

export default function GuestLayout() {
  const { token } = useStateContext();

  if (token) {
    return <Navigate to="/react-education/users" />;
  }
  return (
    <div>
      <div>
        {/* GuestLayout */}
        <Outlet />
      </div>
    </div>
  );
}
