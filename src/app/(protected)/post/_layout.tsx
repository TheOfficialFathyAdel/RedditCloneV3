import { Colors } from "@/colors/Colors";
import { Stack, useRouter } from "expo-router";
import { Ellipsis, Search, SortDesc, X } from "lucide-react-native";
import { View } from "react-native";
import tw from "twrnc";

export default function PostLayout() {
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="[id]"
        options={{
          headerTitle: "Post",
          headerTitleAlign: "center",
          headerTitleStyle: { color: "#fff" },
          headerStyle: { backgroundColor: Colors.RedditColor },
          headerLeft: () => (
            <X size={25} color={"#fff"} onPress={() => router.back()} />
          ),
          headerRight: () => (
            <View style={tw`flex-row mr-2 gap-2 items-center`}>
              <Search size={25} color={"#fff"} />
              <SortDesc size={25} color={"#fff"} />
              <Ellipsis size={25} color={"#fff"} />
            </View>
          ),
        }}
      />
    </Stack>
  );
}
