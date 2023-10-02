import { useAuth } from "@/hooks/auth";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const SessionLoaded: FC<Props> = ({ children }) => {
  const { session } = useAuth();

  if (session === undefined) {
    return null;
  }
  return <>{children}</>;
};
