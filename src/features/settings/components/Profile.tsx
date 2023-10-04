import { FormInput } from "@/components/form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { vestResolver } from "@hookform/resolvers/vest";
import { useAtom } from "jotai";
import { FC, useEffect } from "react";
import { useForm } from "react-hook-form";
import { schema } from "../schema";
import { fetchUserAtom, updateUserAtom, userAtom } from "../services/state";
import { Settings } from "../types";

export const Profile: FC = () => {
  const [, fetchUser] = useAtom(fetchUserAtom);
  const [, updateUser] = useAtom(updateUserAtom);
  const [user] = useAtom(userAtom);
  const { toast } = useToast();

  const methods = useForm<Settings>({
    mode: "onChange",
    resolver: vestResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      city: "",
      province: "",
      postalCode: "",
    },
  });

  const { handleSubmit,  setValue } = methods;

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (user) {
      for (const field in user) {
        setValue(field as string, user[field as keyof Settings]);
      }
    }
  }, [user, setValue]);

  const onSubmit = async (values: Settings) => {
    updateUser(values);
    toast({
      title: "Profile Infomation is Updated!",
    });
  };

  return (
    <div className="p-10">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Personal Information
      </h2>

      <Form {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
        >
          <div className="sm:col-span-3">
            <FormInput
              field="firstName"
              label="First Name"
              placeholder="John"
            />
          </div>
          <div className="sm:col-span-3">
            <FormInput
              field="lastName"
              label="Last Name"
              placeholder="Doe"
            />
          </div>
          <div className="sm:col-span-6">
            <FormInput
              field="email"
              label="Email"
              placeholder="example@email.com"
              type="email"
            />
          </div>
          <div className="col-span-full">
            <FormInput
              field="address"
              label="Address"
              placeholder="123 street ave"
            />
          </div>
          <div className="sm:col-span-2 sm:col-start-1">
            <FormInput
              field="city"
              label="City"
              placeholder="Toronto"
            />
          </div>
          <div className="sm:col-span-2">
            <FormInput
              field="province"
              label="Province"
              placeholder="Ontario"
            />
          </div>
          <div className="sm:col-span-2">
            <FormInput
              field="postalCode"
              label="Postal Code"
              placeholder="XXX XXX"
            />
          </div>
          <Button className="mt-10 w-full" type="submit">
            Update Profile
          </Button>
        </form>
      </Form>
    </div>
  );
};
