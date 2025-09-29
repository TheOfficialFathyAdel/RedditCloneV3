import { Colors } from "@/colors/Colors";
import { Tabs } from "expo-router";
import {
  CirclePlus,
  Home,
  Inbox,
  MessageCircleMore,
  Users,
} from "lucide-react-native";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.TabBarActiveTintColor,
        tabBarInactiveTintColor: Colors.TabBarInactiveTintColor,
        tabBarLabelStyle: { fontSize: 13, fontWeight: "600" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitle: "Reddit",
          headerTitleAlign: "center",
          headerTintColor: Colors.RedditColor,
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: "Community",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => <Users color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <CirclePlus color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <MessageCircleMore color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => <Inbox color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
