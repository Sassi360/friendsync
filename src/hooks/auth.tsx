import {
  sessionAtom,
  userAtom,
} from "@/features/authentication/services/state";
import { useAtom } from "jotai/react";

export const useAuth = () => {
  const [user] = useAtom(userAtom);
  const [session] = useAtom(sessionAtom);

  return { session, user };
};
