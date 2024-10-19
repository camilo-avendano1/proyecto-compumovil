import React, { useState } from "react";
import { Pressable, TextInputProps, View } from "react-native";
import CustomTextInput from "./CustomTextInput";
import { Control, FieldValues, useFormContext } from "react-hook-form";
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { formatTime } from "@/libs/formatTime";

interface Props extends TextInputProps {
  name: string;
  pickerMode: "date" | "time";
  control: Control<FieldValues, any>;
}

const CustomDateTimePicker = ({
  control,
  name,
  pickerMode,
  ...props
}: Props) => {
  const { setValue } = useFormContext();

  const [date, setDate] = useState<Date | undefined>(new Date(1598051730000));

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    console.log(name);
    pickerMode === "date" &&
      setValue(name, currentDate?.toISOString().slice(0, 10));
    pickerMode === "time" && setValue(name, formatTime(currentDate as Date));
  };

  const showPicker = () => {
    DateTimePickerAndroid.open({
      value: date as Date,
      onChange,
      mode: pickerMode,
      is24Hour: true,
    });
  };

  return (
    <View>
      <Pressable onPress={showPicker}>
        <CustomTextInput
          control={control}
          name={name}
          {...props}
          editable={false}
        />
      </Pressable>
    </View>
  );
};

export default CustomDateTimePicker;
