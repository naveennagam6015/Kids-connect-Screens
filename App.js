
import { Text, View } from 'react-native';
import { useFonts } from "expo-font";
import 'react-native-gesture-handler'
import Home from './screens/Home';
import Registration from './screens/Registration';
import ProfileVerification from './screens/ProfileVerification';
import Retry from './screens/Retry';
import 'react-native-gesture-handler';
import Navigtion from './Navigation';
import Requests from './screens/Requests';

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
    <Requests />
  );
}


