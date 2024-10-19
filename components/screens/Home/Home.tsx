import { View } from "react-native";
import Hero from "./Hero";
import { getEvents } from "@/services/getEvents";
import EventCard from "@/components/EventCard";

const Home = () => {
  const events = getEvents();

  return (
    <>
      <View>
        <Hero></Hero>
      </View>
      <View className="px-8">
        {events.map((event) => (
          <View className="mt-5">
            <EventCard event={event} />
          </View>
        ))}
      </View>
    </>
  );
};

export default Home;
