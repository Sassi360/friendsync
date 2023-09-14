import { Navbar } from "@/features/Navbar";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
