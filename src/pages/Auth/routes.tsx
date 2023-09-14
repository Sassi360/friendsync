import { AuthLayout } from "@/components/Layouts";
import { Route } from "react-router-dom";
import { Login } from "./login";
import { Register } from "./register";

export const AuthRoute = (
  <>
    <Route path="/" element={<AuthLayout />}>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Route>
  </>
);