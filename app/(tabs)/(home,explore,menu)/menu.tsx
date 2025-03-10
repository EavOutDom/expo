import { router, useNavigation, useRouter } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const index = (props: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{ color: "white" }}>This menu list screen</Text>
        <Button title="Go to ps screen" onPress={() => router.push("/beforePS")} />
      </View>
    </SafeAreaView>
  );
};

export default index;
