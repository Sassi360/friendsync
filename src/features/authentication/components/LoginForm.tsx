import { FormInput } from "@/components/form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { vestResolver } from "@hookform/resolvers/vest";
import { useAtom } from "jotai";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { schema } from "../schema";
import { signInAtom } from "../services/state";
import { Auth } from "../type";

export const LoginForm: FC = ({}) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [, signIn] = useAtom(signInAtom);

  const methods = useForm<Auth>({
    mode: "onChange",
    resolver: vestResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (login: Auth) => {
    try {
      await signIn(login);
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
          field="email"
          label="Email"
          placeholder="example@email.com"
          type="email"
          autoComplete="email"
        />
        <FormInput
          field="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <Button className="w-full" type="submit">
          Sign In
        </Button>
      </form>
    </Form>
  );
};
