import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/Home';
import Appointment from './screens/Appointment';
import Profile from './screens/Profile';
import Requests from './screens/Requests';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import Login from './screens/Login';
import Registration from './screens/Registration';
import ProfileSetupAfterAdminApproval from './screens/ProfileSetupAfterAdminApproval';
import ProfileVerification from './screens/ProfileVerification';
import AddingKidsAndPets from './screens/AddingKidsAndPets';
import Chat from './screens/Chat';
import ChatAddingGroup from './screens/ChatAddingGroup';
import GroupSettings from './screens/GroupSettings';
import ProfileEdit from './screens/ProfileEdit';
import MyAccount from './screens/MyAccount';
import DevicePermissions from './screens/DevicePermissions';
import AccountDeletion from './screens/AccountDeletion';
import { color } from './assets/colors/theme';
import { StyleSheet } from 'react-native';
import Thankyou from './screens/Thankyou';
import Test from './Test';
import ProfileSetup from './screens/ProfileSetup';
import Confirmation from './screens/Confirmation ';

const BottomTab = createBottomTabNavigator();

function BottomNavigation() {
    return (
        <BottomTab.Navigator
            screenOptions={({ navigation, route }) => ({
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Appointment') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    } else if (route.name === 'Requests') {
                        iconName = focused ? 'list' : 'list-outline';
                    } else if (route.name === 'ReserveList') {
                        iconName = focused ? 'list-circle' : 'list-circle-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }
                    return <Ionicons name={iconName} size={30} color={color} />;
                },
                tabBarActiveTintColor: color.primary,
                tabBarInactiveTintColor: color.neutral[100],
                tabBarLabelStyle: {
                    color: '#000'
                },
                tabBarStyle: {
                    position: 'absolute',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    backgroundColor: 'transparent',
                    elevation: 0,
                    shadowOpacity: 0,
                },
                tabBarBackground: () => (
                    <BlurView
                        intensity={210}
                        style={{
                            ...StyleSheet.absoluteFillObject,
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 10,
                        }}
                    />
                ),
            })}
        >
            <BottomTab.Screen
                name="Home"
                component={Home}
            />
            <BottomTab.Screen
                name="Appointment"
                component={Appointment}
            />
            <BottomTab.Screen
                name="Requests"
                component={Requests}
            />
            <BottomTab.Screen
                name="Profile"
                component={Profile}
            />
        </BottomTab.Navigator>
    )
}

const Stack = createStackNavigator();

function StackNavigation() {
    return (
        <Stack.Navigator
            initialRouteName='Login'
        >

            <Stack.Screen name='Login' component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen name='Test' component={Test}
                options={{ headerShown: false, presentation: 'modal' }}
            />
            <Stack.Screen name='BottomNavigation' component={BottomNavigation}
                options={{ headerShown: false }}
            />
            <Stack.Screen name='Register' component={Registration}
                options={{ headerTitle: "Step 1 of 2" }}
            />
            <Stack.Screen name='ProfileVerification' component={ProfileVerification}
                options={{ headerTitle: "Step 1 of 2" }}
            />
            <Stack.Screen name='ProfileSetupAfterAdminApproval' component={ProfileSetupAfterAdminApproval}
                options={{ headerShown: false }}
            />
            <Stack.Screen name='ProfileSetup' component={ProfileSetup}
                options={{ headerTitle: "Profile Setup" }}
            />
            <Stack.Screen name='AddingKidsAndPets' component={AddingKidsAndPets}
                options={{ headerTitle: "Adding Kids And Pets" }}
            />
            <Stack.Screen name='Chat' component={Chat}
                options={{ headerTitle: "Chat" }}
            />
            <Stack.Screen name='ChatAddingGroup' component={ChatAddingGroup}
                options={{ headerTitle: "Chat Adding Group" }}
            />
            <Stack.Screen name='GroupSettings' component={GroupSettings}
                options={{ headerTitle: "Group Settings" }}
            />
            <Stack.Screen name='ProfileEdit' component={ProfileEdit}
                options={{ headerTitle: "Profile Edit" }}
            />
            <Stack.Screen name='MyAccount' component={MyAccount}
                options={{ headerTitle: "My Account" }}
            />
            <Stack.Screen name='DevicePermissions' component={DevicePermissions}
                options={{ headerTitle: "Device Permissions" }}
            />
            <Stack.Screen name='AccountDeletion' component={AccountDeletion}
                options={{ headerTitle: "Account Deletion" }}
            />
            <Stack.Screen name='Thankyou' component={Thankyou}
                options={{ headerShown: false }}
            />
            <Stack.Screen name='Confirmation' component={Confirmation}
                options={{ headerTitle: "Confirmation" }}
            />
        </Stack.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <StackNavigation />

        </NavigationContainer>
    )
}
