import { cn } from "@/lib/utils";
import { FC } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  title: string;
  href: string;
};

export const LinkRef: FC<Props> = ({ href, title }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          "text-sm",
          "font-medium",
          "transition-colors",
          "hover:text-primary",
          {
            "text-muted-foreground": !isActive,
          },
        )
      }
    >
      {title}
    </NavLink>
  );
};
