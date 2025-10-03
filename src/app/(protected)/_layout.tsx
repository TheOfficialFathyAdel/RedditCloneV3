import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { Colors } from "@/colors/Colors";

export default function AuthRoutesLayout() {
  const { isSignedIn } = useAuth();

  if (!isSignedIn) {
    // Redirect unauthenticated users to sign-in
    return <Redirect href={"/signIn"} />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    ></Stack>
  );
}
