import { DevTools } from "jotai-devtools";
import { FC, ReactNode, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import "./global.css";
import { RoutesCollection } from "./routes";
import { SessionLoaded } from "./features/authentication/hooks/Auth";

type RootProps = {
  children: ReactNode;
};

const Root: FC<RootProps> = ({ children }) => {
  return (
    <SessionLoaded>
      <StrictMode>{children}</StrictMode>
      <Toaster />
      <DevTools />
    </SessionLoaded>
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <Root>
    <BrowserRouter>
      <RoutesCollection />
    </BrowserRouter>
  </Root>,
);
