import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
  children: React.ReactNode;
}

const ScreenLayout = ({ children }: Props) => {
  return <SafeAreaView>{children}</SafeAreaView>;
};

export default ScreenLayout;
