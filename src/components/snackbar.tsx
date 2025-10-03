import React from "react";
import { Text, View } from "react-native";
import tw from "twrnc";

interface SnackbarProps {
  errorMessage: string;
}
export default function Snackbar({ errorMessage }: SnackbarProps) {
  return (
    <React.Fragment>
      {errorMessage && (
        <View
          style={tw`bg-red-500 w-full px-6 py-2 flex-row items-center absolute bottom-10`}
        >
          <Text style={tw`text-white font-bold text-center text-lg self-start`}>
            {errorMessage}
          </Text>
        </View>
      )}
    </React.Fragment>
  );
}
