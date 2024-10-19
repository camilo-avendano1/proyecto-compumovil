import { Image, Text, View } from "react-native";

const Hero = () => {
  return (
    <View className="pt-14 flex justify-center bg-gray-300">
      <Image
        className="m-auto"
        source={require("@/assets/images/EventSync_logo.png")}
        width={75}
        height={75}
      />
      <Text className="text-center text-4xl font-bold mt-5 mb-5">
        EventSync
      </Text>
    </View>
  );
};

export default Hero;
