import { MainNav } from "@/features/navigation";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <>
      <MainNav />
      <div className="flex h-[calc(100vh-73px)] flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <Outlet />
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1694930102144-24890d68203f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
