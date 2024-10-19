import CustomDateTimePicker from "@/components/common/CustomDateTimePicker";
import CustomTextInput from "@/components/common/CustomTextInput";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import { Button, GestureResponderEvent, Text, View } from "react-native";

const CreateEventForm = () => {
  const { control, handleSubmit, reset } = useFormContext();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  const handleReset = (event: GestureResponderEvent) => {
    event.persist();
    console.log("pasa por acá");
    reset();
  };

  return (
    <View>
      <View className="my-2">
        <Text>Nombre del Evento:</Text>
        <CustomTextInput
          name="name"
          control={control}
          placeholder={"Ej: Encuentro anual"}
        />
      </View>
      <View className="my-2">
        <Text>Descripción del evento:</Text>
        <CustomTextInput
          name="description"
          control={control}
          placeholder={"Volver a vernos las caras"}
          multiline={true}
          numberOfLines={2}
          textAlignVertical="top"
        />
      </View>
      <View className="flex flex-row justify-between gap-x-5 my-2">
        <View className="flex-1">
          <Text>Fecha del evento: </Text>
          <CustomDateTimePicker
            name="date"
            control={control}
            pickerMode="date"
          />
        </View>
        <View className="flex-1">
          <Text>Hora de evento: </Text>
          <CustomDateTimePicker
            name="hour"
            control={control}
            pickerMode="time"
          />
        </View>
      </View>
      <Button title="Submit" onPress={handleSubmit(onSubmit)}></Button>
      <Button title="Clear" onPress={handleReset}></Button>
    </View>
  );
};

export default CreateEventForm;
