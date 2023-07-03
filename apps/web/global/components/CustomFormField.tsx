import { ControllerRenderProps, Path, useFormContext } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "./ui/form";
import { Input as BaseInput } from "./ui/input";
import React from "react";

interface CustomFormFieldProps {
  name: string;
  label: string;
  placeholder?: string;
  description?: string;
  Input?: React.FC<unknown>
}

export function CustomFormField<FormState>({
  name,
  label,
  placeholder,
  description,
  Input
}: CustomFormFieldProps) {
  const { control, register } = useFormContext();
  return (
    <FormField
      control={control}
      name={name as Path<FormState>}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {Input({ register, name, placeholder, field })}
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export const TextInput = ({ field, placeholder }) => {
  return (
    <BaseInput
      type="string"
      onFocus={(e) => {
        const goToLastCharacter = () => {
          e.target.selectionStart = e.target.value.length;
        };
        goToLastCharacter();
      }}
      {...(field as ControllerRenderProps)}
      placeholder={placeholder || ""}
    />
  )
}


export const NumberInput = ({ register, name, placeholder, field }) => {
  return (
    <BaseInput
      type="number"
      placeholder={placeholder || ""}
      {...(field as ControllerRenderProps)}
      {...register(name, { valueAsNumber: true })}
    />
  )
}