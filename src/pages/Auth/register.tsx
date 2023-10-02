import { RegisterForm } from "@/features/authentication";

export const Register = () => {
  return (
    <>
      <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Create a secure account
      </h2>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <RegisterForm />
      </div>
    </>
  );
};
