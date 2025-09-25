import { Link } from "expo-router";
import { View } from "react-native";
import tw from "twrnc";

export default function App() {
  return (
    <View>
      <Link href="about" style={tw`font-bold text-xl`}>
        Home Page
      </Link>
    </View>
  );
}
