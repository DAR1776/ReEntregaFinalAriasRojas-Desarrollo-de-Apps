import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./src/navigation/MainNavigator";
import {useFonts} from 'expo-font'
import fonts from './src/global/fonts';

import { Provider } from "react-redux";
import store from "./src/store";

import { init } from "./src/db";

init()
  .then(() => console.log('DB initialized'))
  .catch(error => console.log('DB failed', error.message))

export default function App() {
  const [fontsLoaded] = useFonts(fonts)

  if(!fontsLoaded){
    return null // Validacion de las fuentes de letra
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator/>
      </NavigationContainer>
    </Provider>
  )

}


