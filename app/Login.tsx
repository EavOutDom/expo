import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const Login = (props: Props) => {
    return (
        <SafeAreaView>
            <Link href="/ProfileDetail" replace>
                <Text>Go to Profile Detail Screen</Text>
            </Link>
        </SafeAreaView>
    );
};

export default Login;
