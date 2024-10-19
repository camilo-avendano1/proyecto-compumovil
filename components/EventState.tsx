import { getDate } from "@/libs/getDate";
import { Text, View } from "react-native";

interface Props {
  date: string;
  hour: string;
}

const EventState = ({ date, hour }: Props) => {
  const parsedDate = getDate(date, hour);
  const currentDateTime = new Date();
  const isEnable = currentDateTime < parsedDate;

  return (
    <View>
      {isEnable ? (
        <Text className="text-green-800 font-bold">Activo</Text>
      ) : (
        <Text className="text-red-500 font-bold">Expirado</Text>
      )}
    </View>
  );
};

export default EventState;
