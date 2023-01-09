import {NavigationContainer} from "@react-navigation/native";
import { StackNavigator } from "./screens/Stack";
import {AppProvider} from './globals/AppContext';
import { LogBox } from "react-native";

LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage"])

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </AppProvider>
  );
}

