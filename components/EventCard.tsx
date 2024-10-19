import { IEvent } from "@/types/event.type";
import { Image, Text, View } from "react-native";
import EventState from "./EventState";

interface Props {
  event: IEvent;
}
const EventCard = ({ event }: Props) => {
  return (
    <View className="my-1 border border-slate-400 p-2 rounded-md flex flex-row gap-1 items-center">
      <Image
        className="w-16 h-16 mr-2"
        source={require("@/assets/images/EventSync_logo.png")}
        width={10}
        height={10}
        resizeMode="contain"
      />
      <View className="flex-1">
        <View className="flex flex-row justify-between items-center mb-1">
          <Text className="text-xl font-bold flex-1">{event.eventName}</Text>
          <EventState date={event.date} hour={event.hour} />
        </View>
        <Text className="text-slate-500">{event.description}</Text>
        <View className="flex flex-row justify-between mt-3 items-center">
          <Text className="flex-1">{event.place}</Text>
          <Text>
            {event.date} - {event.hour}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default EventCard;
