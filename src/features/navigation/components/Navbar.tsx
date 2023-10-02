import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/auth";
import { cn } from "@/lib/utils";
import { useAtom } from "jotai";
import { FC, HTMLAttributes } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOutAtom } from "../../authentication/services/state";
import { LinkRef } from "./LinkRef";

export const Navigation = [
  { name: "Home", href: "/" },
  { name: "Login", href: "/login" },
];

export const MainNav: FC = ({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [, signOut] = useAtom(signOutAtom);

  const handleLogout = () => {
    signOut();
    navigate("/login");
  };

  return (
    <header className="bg-white border-b">
      <nav
        className={cn(
          "mx-auto flex  items-center justify-between p-6 lg:px-8",
          className,
        )}
        {...props}
      >
        <div className="space-x-4 lg:space-x-6">
          <LinkRef href="/" title="Home" />
        </div>

        {user ? (
          <div className="flex space-x-3 items-center">
            <LinkRef href="/app" title="Dashboard" />
            <LinkRef href="/app/settings" title="Settings" />
            <Button variant="outline" onClick={handleLogout}>
              Sign Out
            </Button>
          </div>
        ) : (
          <div className="space-x-4">
            <Button variant="outline" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/register">Sign Up</Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};
