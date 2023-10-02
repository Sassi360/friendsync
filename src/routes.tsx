import { DefaultLayout, ProtectedLayout } from "@/layouts";
import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "./pages/Auth/routes";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { Settings } from "./pages/Settings";

export const RoutesCollection: FC = () => {
  return (
    <Routes>
      {/* Homepage */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
      </Route>

      {/* Auth*/}
      {AuthRoute}

      {/* Protected Route */}
      <Route path="/app" element={<ProtectedLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Not Found */}
      <Route path="*" element={<p>404: Page not found</p>} />
    </Routes>
  );
};
