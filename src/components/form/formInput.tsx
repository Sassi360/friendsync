import { FC } from "react";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

type Props = {
  control: Control<any, object>;
  field: string;
  label: string;
  placeholder?: string;
  type?: string;
};

export const FormInput: FC<Props> = ({
  control,
  field,
  label,
  placeholder,
  type = "text",
}) => {
  return (
    <FormField
      control={control}
      name={field}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input placeholder={placeholder} type={type} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
