import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";

export default function App() {
  return (
    <SafeAreaView>
      <Text style={tw`font-bold text-4xl`}>Hello world again</Text>
    </SafeAreaView>
  );
}
