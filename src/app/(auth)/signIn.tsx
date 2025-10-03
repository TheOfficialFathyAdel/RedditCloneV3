import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { Colors } from "@/colors/Colors";
import Snackbar from "@/src/components/snackbar";

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  // Handle the submission of the sign-in form
  const onSignInPress = async () => {
    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
        setTimeout(() => setErrorMessage(""), 2000);
      } else {
        setErrorMessage("An unknown error occurred.");
        setTimeout(() => setErrorMessage(""), 2000);
      }
    }
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-white px-10`}>
      <Text style={tw`text-4xl font-bold mb-6`}>Sign In</Text>
      <TextInput
        style={tw`border border-2 border-gray-300 mb-2 rounded-md w-full text-base`}
        autoCapitalize="none"
        value={emailAddress}
        placeholder="Enter email"
        onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
      />
      <TextInput
        style={tw`border border-2 border-gray-300 rounded-md w-full my-2 text-base`}
        value={password}
        placeholder="Enter password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <TouchableOpacity
        style={tw`bg-blue-500 px-20 py-4 rounded-full mt-2 mb-2`}
        onPress={onSignInPress}
      >
        <Text style={tw`font-bold text-xl text-white`}>Sign In</Text>
      </TouchableOpacity>
      <View style={tw`flex-row gap-2 items-center`}>
        <Text style={tw`text-base font-bold text-lg`}>
          Don't have an Account?
        </Text>
        <Link href="/signUp">
          <Text style={tw`font-bold text-blue-500 text-base text-lg`}>
            SignUp
          </Text>
        </Link>
      </View>
      <Snackbar errorMessage={errorMessage} />
    </View>
  );
}
