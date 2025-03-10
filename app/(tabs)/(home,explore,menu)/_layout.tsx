// (tabs)/(home,explore)/_layout.tsx

import { Stack } from "expo-router";
import { useMemo } from "react";

const Layout = ({ segment }: { segment: string }) => {
  // use `segment` to conditionally set the root screen
  const rootScreen = useMemo(() => {
    switch (segment) {
      case "(home)":
        return <Stack.Screen name="index" />;
      case "(explore)":
        return <Stack.Screen name="explore" />;
      case "(menu)":
        return <Stack.Screen name="menu" />;
    }
  }, [segment]);

  // shared routes go here
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {rootScreen}
      <Stack.Screen name="beforePS" />
      <Stack.Screen name="productListScreen" />
    </Stack>
  );
};

export default Layout;
