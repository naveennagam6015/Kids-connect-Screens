import { useFonts } from "expo-font";
import 'react-native-gesture-handler'
import 'react-native-gesture-handler';
import ProfileSetup from './screens/ProfileSetup.js';
import Navigtion from './Navigation';

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
    <Navigtion />
    // <ProfileSetup />
  );
}


