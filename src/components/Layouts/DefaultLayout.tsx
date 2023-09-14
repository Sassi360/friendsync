import { Navbar } from "@/features/Navbar";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
