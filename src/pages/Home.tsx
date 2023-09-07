import { Button } from "@/components/ui/button";
import { FC } from "react";

export const Home: FC = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button onClick={() => alert("Hello World")}>Welcome</Button>
    </div>
  );
};
