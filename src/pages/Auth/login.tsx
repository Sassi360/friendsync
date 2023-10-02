import { LoginForm } from "@/features/authentication";
import { FC } from "react";

export const Login: FC = () => {
  return (
    <>
      <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Welcome
      </h2>
      <p className="mt-2 text-sm leading-6 text-gray-500">
        Sign in via magic link with your email below
      </p>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <LoginForm />
      </div>
    </>
  );
};
