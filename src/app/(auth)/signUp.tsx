import * as React from "react";
import {
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import tw from "twrnc";
import Snackbar from "@/src/components/snackbar";

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return;

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setPendingVerification(true);
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

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });

        router.replace("/");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.

        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (error) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      if (error instanceof Error) {
        setErrorMessage(error.message);
        setTimeout(() => setErrorMessage(""), 2000);
      } else {
        setErrorMessage("An unknown error occurred.");
        setTimeout(() => setErrorMessage(""), 2000);
      }
    }
  };

  if (pendingVerification) {
    return (
      <View style={tw`flex-1 justify-center items-center bg-white px-10`}>
        <Text style={tw`font-bold text-2xl`}>Verify your email</Text>
        <TextInput
          value={code}
          placeholder="Enter your verification code"
          onChangeText={(code) => setCode(code)}
          style={tw`border border-2 border-gray-300 mb-2 rounded-md w-full text-base font-bold mt-4 px-4`}
        />
        <TouchableOpacity
          style={tw`bg-blue-500 px-20 py-4 rounded-full mt-2 mb-2`}
          onPress={onVerifyPress}
        >
          <Text style={tw`font-bold text-lg text-white `}>Verify</Text>
        </TouchableOpacity>
        <Snackbar errorMessage={errorMessage} />
      </View>
    );
  }

  return (
    <View style={tw`flex-1 justify-center items-center bg-white px-10`}>
      <>
        <Text style={tw`text-4xl font-bold mb-8`}>SignUp</Text>
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
          onPress={onSignUpPress}
        >
          <Text style={tw`font-bold text-xl text-white `}>SignUp</Text>
        </TouchableOpacity>
        <View style={tw`flex-row gap-2 items-center mt-2`}>
          <Text style={tw`text-lg font-bold`}>Already have an Account?</Text>
          <Link href="/signIn">
            <Text style={tw`font-bold text-blue-500 text-lg`}>SignIn</Text>
          </Link>
        </View>
        <Snackbar errorMessage={errorMessage} />
      </>
    </View>
  );
}
