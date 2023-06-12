import {NavigationContainer} from "@react-navigation/native";
import { StackNavigator } from "./screens/Stack";
import {AppProvider} from './globals/AppContext';
import { LogBox } from "react-native";
import { useCallback, useEffect, useState } from "react";
import { Text, View, Image } from "react-native";
import * as SplashScreen from "expo-splash-screen";


LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage"])

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <AppProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
      <Image
        source={require("./assets/Colored.png")}
        resizeMode="cover"
        style={{ flex: 1 }}
      />
    </AppProvider>
  );
}

