import React from "react";
import { Control, FieldValues, useController } from "react-hook-form";
import { TextInput, TextInputProps } from "react-native";

interface Props extends TextInputProps {
  name: string;
  control: Control<FieldValues, any>;
}
const CustomTextInput = ({ name, control, ...props }: Props) => {
  const { field } = useController({
    name,
    control,
  });

  return (
    <TextInput
      className="bg-white border border-slate-300 rounded-sm p-1"
      {...field}
      onChangeText={field.onChange}
      {...props}
    />
  );
};

export default CustomTextInput;
