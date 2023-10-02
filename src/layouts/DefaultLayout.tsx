import { MainNav } from "@/features/navigation";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <>
      <MainNav />
      <div className="flex h-[calc(100vh-73px)] flex-col">
        <Outlet />
      </div>
    </>
  );
};
