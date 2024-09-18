import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    "oswald":require('./../assets/fonts/Oswald/static/Oswald-Bold.ttf'),
     "oswaldReg":require('./../assets/fonts/Oswald/static/Oswald-Regular.ttf')
  })
  return (
    <Stack screenOptions={{headerShown:false,}}>
      <Stack.Screen name="index" />
    </Stack>
  );
}
