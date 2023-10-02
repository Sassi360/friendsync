import { FormInput } from "@/components/form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { vestResolver } from "@hookform/resolvers/vest";
import { useAtom } from "jotai";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { schema } from "../schema";
import { signUpAtom } from "../services/state";
import { Auth } from "../type";

export const RegisterForm: FC = ({}) => {
  const navigate = useNavigate();
  const [, signUp] = useAtom(signUpAtom);

  const methods = useForm<Auth>({
    mode: "all",
    resolver: vestResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, control } = methods;

  const onSubmit = async (login: Auth) => {
    try {
      await signUp(login);
      navigate("/app");
    } catch (error) {
      toast({
        variant: "destructive",
        title: (error as Error).message,
      });
    }
  };

  return (
    <Form {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <FormInput
          control={control}
          field="email"
          label="Email"
          placeholder="example@email.com"
          type="email"
        />

        <FormInput
          control={control}
          field="password"
          label="Password"
          type="password"
        />

        <Button className="w-full" type="submit">
          Register
        </Button>
      </form>
    </Form>
  );
};
