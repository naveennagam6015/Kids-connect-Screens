import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/Home';
import Appointment from './screens/Appointment';
import Profile from './screens/Profile';
import Requests from './screens/Requests';
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo, Ionicons } from '@expo/vector-icons';
import Login from './screens/Login';
import Registration from './screens/Registration';
import ProfileSetupAfterAdminApproval from './screens/ProfileSetupAfterAdminApproval';
import ProfileVerification from './screens/ProfileVerification';
import AddingKidsAndPets from './screens/AddingKidsAndPets';
import Chat from './screens/Chat';
import ChatAddingGroup from './screens/ChatAddingGroup';
import GroupSettings from './screens/GroupSettings';

const BottomTab = createMaterialBottomTabNavigator();

function BottomNavigation() {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo name="home" size={24} color={focused ? '#283F45' : '#969696'} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Appointment"
                component={Appointment}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="add-circle" size={24} color={focused ? '#283F45' : '#969696'} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Requests"
                component={Requests}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo name="list" size={24} color={focused ? '#283F45' : '#969696'} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Entypo name="user" size={24} color={focused ? '#283F45' : '#969696'} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    )
}

const Stack = createStackNavigator();

function StackNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login}
                options={{ headerShown: false }}
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
