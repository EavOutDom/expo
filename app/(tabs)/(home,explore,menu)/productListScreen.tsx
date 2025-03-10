import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};

const productListScreen = (props: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>productListScreen</Text>
        <Button title="Check can back" onPress={() => console.log(router.canGoBack(), router.canDismiss())} />
        <Button title="Dismiss" onPress={() => router.dismissAll()} />
      </View>
    </SafeAreaView>
  );
};

export default productListScreen;
