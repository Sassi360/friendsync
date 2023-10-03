import { FormInput } from "@/components/form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { vestResolver } from "@hookform/resolvers/vest";
import { useAtom } from "jotai";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { schema } from "../schema";
import { signUpAtom } from "../services/state";
import { Auth } from "../type";

export const RegisterForm: FC = ({}) => {
  const navigate = useNavigate();
  const [, signUp] = useAtom(signUpAtom);
  const [loading, setLoading] = useState(false);

  const methods = useForm<Auth>({
    mode: "all",
    resolver: vestResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = async (login: Auth) => {
    setLoading(true);
    try {
      await signUp(login);
      navigate("/app");
    } catch (error) {
      toast({
        variant: "destructive",
        title: (error as Error).message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
        autoComplete="false"
      >
        <FormInput
          field="email"
          label="Email"
          placeholder="example@email.com"
          type="email"
          autoComplete="off"
        />

        <FormInput
          field="password"
          label="Password"
          type="password"
          autoComplete="new-password"
        />

        <Button className="w-full" type="submit" disabled={loading}>
          Register
        </Button>
      </form>
    </Form>
  );
};
