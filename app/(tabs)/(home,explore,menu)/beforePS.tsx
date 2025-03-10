import { router } from "expo-router";
import { Button, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const beforePS = (props: Props) => {
  return (
    <SafeAreaView>
      {/* <View></View> */}
      <Button title="Go to product list screen" onPress={() => router.push("/productListScreen")} />
    </SafeAreaView>
  );
};

export default beforePS;
