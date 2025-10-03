import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen name="signIn" options={{ title: "SignIn" }} />
    </Stack>
  );
}
