import { router } from "expo-router";
import React from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const ProfileDetail = (props: Props) => {
  return (
    <SafeAreaView>
      <Button title="GO BACK" onPress={() => router.back()} />
      <Button title="Dismiss" onPress={() => router.dismissAll()} />
    </SafeAreaView>
  );
};

export default ProfileDetail;
