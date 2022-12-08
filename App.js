import {NavigationContainer} from "@react-navigation/native";
import { StackNavigator } from "./screens/Stack";
import {AppProvider} from './globals/AppContext';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </AppProvider>
  );
}

