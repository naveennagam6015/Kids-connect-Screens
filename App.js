import { useFonts } from "expo-font";
import 'react-native-gesture-handler'
import 'react-native-gesture-handler';
import ProfileSetup from './screens/ProfileSetup.js';
import Navigtion from './Navigation';
import Referal from "./screens/Referal.js";
import Profile from "./screens/Profile.js";
import Home from "./screens/Home.js";
import GroupSettings from "./screens/GroupSettings.js";
import About from "./screens/About.js";
import AccountDeletion from "./screens/AccountDeletion.js";

export default function App() {

  const [loaded] = useFonts({
    RobotoRegular: require('./assets/fonts/Roboto-Regular.ttf'),
    RobotoLight: require('./assets/fonts/Roboto-Light.ttf'),
    RobotoMedium: require('./assets/fonts/Roboto-Medium.ttf'),
    RobotoBold: require('./assets/fonts/Roboto-Bold.ttf'),
    RobotoBlack: require('./assets/fonts/Roboto-Black.ttf'),
  })

  if (!loaded) {
    return null;
  }


  return (
    // <Navigtion />
    <AccountDeletion />
  );
}


