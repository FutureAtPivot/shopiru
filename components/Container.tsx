import Colors from "@/constants/Colors";
import { SafeAreaView } from "react-native";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView
      style={{
        display: "flex",
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: Colors.dark.background,
      }}
    >
      {children}
    </SafeAreaView>
  );
};
