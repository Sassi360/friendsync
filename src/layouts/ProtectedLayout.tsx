import { MainNav } from "@/features/navigation";
import { useAuth } from "@/hooks/auth";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedLayout = () => {
  const { session } = useAuth();

  if (session === undefined) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <MainNav />
      <div className="flex h-[calc(100vh-73px)] flex-col max-w-screen-lg mx-auto">
        <Outlet />
      </div>
    </>
  );
};
