import CreateEventForm from "@/components/Forms/CreateEventForm/CreateEventForm";
import CreateEventFormProvider from "@/components/Forms/CreateEventForm/CreateEventFormProvider";
import React from "react";
import { Text, View } from "react-native";

const CreateEventPage = () => {
  return (
    <View className="px-5">
      <Text className="font-bold text-2xl text-center mt-3">
        Crear un Evento
      </Text>
      <Text className="text-lg mt-2">
        Ingresa los siguientes campos para crear un nuevo evento:
      </Text>
      <CreateEventFormProvider>
        <CreateEventForm />
      </CreateEventFormProvider>
    </View>
  );
};

export default CreateEventPage;
