import { useAuth } from "@/hooks/auth";
import { FC } from "react";

export const Dashboard: FC = () => {
  const { user } = useAuth();

  return (
    <div className="flex items-center justify-center  flex-col py-10">
      <h1 className="text-3xl font-bold">User Info:</h1>
      <pre>{JSON.stringify(user, null, 4)} </pre>
    </div>
  );
};
