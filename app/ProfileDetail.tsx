import { Link, useRouter } from "expo-router";
import React from "react";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const ProfileDetail = (props: Props) => {
    const route = useRouter();
    return (
        <SafeAreaView>
            <Button title="GO BACK" onPress={() => route.back()} />
        </SafeAreaView>
    );
};

export default ProfileDetail;
