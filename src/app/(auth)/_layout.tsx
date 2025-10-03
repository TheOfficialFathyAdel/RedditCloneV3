import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }

  return (
    <Stack>
      <Stack.Screen
        name="signIn"
        options={{ headerTitle: "SignIn", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="signUp"
        options={{ headerTitle: "SignUp", headerTitleAlign: "center" }}
      />
    </Stack>
  );
}
