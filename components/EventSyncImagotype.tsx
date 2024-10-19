import React from "react";
import { Image, Text, View } from "react-native";

const EventSyncImagotype = () => {
  return (
    <View className="pl-4 flex flex-row items-center">
      <Image
        className="w-8 h-8 mr-3"
        source={require("@/assets/images/EventSync_logo.png")}
        resizeMode="contain"
      />
      <Text className="font-bold text-xl text-black">EventSync</Text>
    </View>
  );
};

export default EventSyncImagotype;
