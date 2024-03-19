import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/Home';
import Appointment from './screens/Appointment';
import Profile from './screens/Profile';
import Requests from './screens/Requests';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Registration from './screens/Registration';
import ProfileSetupAfterAdminApproval from './screens/ProfileSetupAfterAdminApproval';
import ProfileVerification from './screens/ProfileVerification';
import AddingKidsAndPets from './screens/AddingKidsAndPets';



const BottomTab = createMaterialBottomTabNavigator();

function BottomNavigation() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Home" component={Home} />
            <BottomTab.Screen name="Appointment" component={Appointment} />
            <BottomTab.Screen name="Requests" component={Requests} />
            <BottomTab.Screen name="Profile" component={Profile} />
        </BottomTab.Navigator>
    )
}

const Stack = createStackNavigator();

function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{
                headerShown: false
            }} />
            <Stack.Screen name='BottomNavigation' component={BottomNavigation} options={{
                headerShown: false
            }} />
            <Stack.Screen name='Register' component={Registration} options={{
                headerTitle: "Step 1 of 2"
            }} />
            <Stack.Screen name='ProfileVerification' component={ProfileVerification} options={{
                headerTitle: "Step 1 of 2"
            }} />
            <Stack.Screen name='ProfileSetupAfterAdminApproval' component={ProfileSetupAfterAdminApproval} options={{
                headerShown: false
            }} />
            <Stack.Screen name='AddingKidsAndPets' component={AddingKidsAndPets} options={{
                headerTitle: "AddingKidsAndPets"
            }} />
        </Stack.Navigator>
    )
}




export default function Navigtion() {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    )
}