import { useRouter } from "expo-router";
import { Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const Profile = (props: Props) => {
    const route = useRouter();

    return (
        <SafeAreaView>
            <Button title="GO BACK" onPress={() => console.log(route.canGoBack())} />
            <Button title="GO LOGIN SCREEN" onPress={() => route.navigate("/Login")} />
        </SafeAreaView>
    );
};

export default Profile;
