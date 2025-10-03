import { ClerkProvider } from "@clerk/clerk-expo";
import { Slot, Stack } from "expo-router";
import { tokenCache } from "@clerk/clerk-expo/token-cache";

export default function RootLayout() {
  return (
    <ClerkProvider
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}
      tokenCache={tokenCache}
    >
      <Slot />
    </ClerkProvider>
  );
}
