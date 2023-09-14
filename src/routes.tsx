import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthRoute } from "./pages/Auth/routes";
import { DefaultLayout } from "./components/Layouts/DefaultLayout";
import { Home } from "./pages/Home";

export const RoutesCollection: FC = () => {
  return (
    <Routes>
      {/* Homepage */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
      </Route>

      {/* Auth*/}
      {AuthRoute}

      {/* Not Found */}
      <Route path="*" element={<p>404: Page not found</p>} />
    </Routes>
  );
};
