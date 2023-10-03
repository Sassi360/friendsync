import { ElementRef, forwardRef } from "react";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input, InputProps } from "../ui/input";

type Props = Omit<InputProps, "name"> & {
  field: string;
  label: string;
};

export const FormInput = forwardRef<ElementRef<typeof Input>, Props>(
  ({ field, label, type = "text", ...inputProps }, ref) => {
    const { control } = useFormContext();

    return (
      <FormField
        control={control}
        name={field}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input type={type} {...inputProps} {...field} ref={ref} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    );
  },
);
