import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Modal, View, Text, Button, Platform, TouchableOpacity } from 'react-native';
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
import { TextBold } from './assets/fonts/CustomText';
import GlobalSearch from './screens/GlobalSearch';
import About from './screens/About';
import AboutUs from './screens/AboutUs';
import ContactUs from './screens/ContactUs';
import PrivacyPolicy from './screens/PrivacyPolicy';
import TermsAndConditions from './screens/TermsAndConditions';
import FAQs from './screens/FAQs';
import ProfileDetails from './components/ProfileDetails';

const BottomTab = createBottomTabNavigator();

function AppointmentModal({ isVisible, onClose }) {
    const navigation = useNavigation();

    return (
        <Modal visible={isVisible} transparent={true} animationType="slide">
            <View style={{ flex: 1, opacity: 0 }} />
            <View style={{
                height: '10%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 15,
                backgroundColor: color.white,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                justifyContent: 'center',
                ...Platform.select({
                    ios: {
                        shadowColor: 'black',
                        shadowOffset: { width: 0, height: 4 },
                        shadowOpacity: 0.2,
                        shadowRadius: 4,
                    },
                    android: {
                        elevation: 30,
                    },
                }),
            }}>
                <View style={{ paddingHorizontal: 20 }}>
                    <View style={{ justifyContent: 'space-between', flexDirection: "row" }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Appointment');
                                onClose();
                            }}
                            style={{
                                borderRadius: 8,
                                alignSelf: 'center',
                                flexDirection: 'row',
                                textAlign: 'center',
                                justifyContent: 'center',
                                borderWidth: 1.5,
                                borderColor: color.accent,
                                paddingVertical: 16,
                                width: '48%'
                            }}>
                            <View style={{ flexDirection: "row" }}>
                                <TextBold style={{ fontSize: 16 }}>Discover</TextBold>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('ProfileSetup');
                                onClose();
                            }}
                            style={{
                                borderRadius: 8,
                                alignSelf: 'center',
                                flexDirection: 'row',
                                textAlign: 'center',
                                borderWidth: 1.5,
                                borderColor: color.primary,
                                justifyContent: 'center',
                                backgroundColor: color.primary,
                                paddingVertical: 16,
                                width: '48%'
                            }}>
                            <View style={{ flexDirection: "row" }}>
                                <TextBold style={{ fontSize: 16, color: '#fff' }}>Connect Now</TextBold>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>

    );
}

function BottomNavigation() {
    const navigation = useNavigation();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    return (
        <>
            <BottomTab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, focused, size }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Appointment') {
                            iconName = focused ? 'add-circle' : 'add-circle-outline';
                        } else if (route.name === 'Requests') {
                            iconName = focused ? 'list' : 'list-outline';
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
                        padding: 5
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
                <BottomTab.Screen name="Home" component={Home} />
                <BottomTab.Screen
                    name="Appointment"
                    listeners={({ navigation }) => ({
                        tabPress: (e) => {
                            e.preventDefault();
                            toggleModal();
                        },
                    })}
                    component={Appointment}
                />
                <BottomTab.Screen name="Requests" component={Requests} />
                <BottomTab.Screen name="Profile"

                    component={Profile} />
            </BottomTab.Navigator>
            <AppointmentModal isVisible={isModalVisible} onClose={toggleModal} />
        </>
    );
}

const Stack = createStackNavigator();

function StackNavigation() {
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='Test' component={Test} options={{ headerShown: false, presentation: 'modal' }} />
            <Stack.Screen name='BottomNavigation' component={BottomNavigation} options={{ headerShown: false }} />
            <Stack.Screen name='Register' component={Registration} options={{ headerTitle: "Step 1 of 2" }} />
            <Stack.Screen name='ProfileVerification' component={ProfileVerification} options={{ headerTitle: "Step 1 of 2" }} />
            <Stack.Screen name='ProfileSetupAfterAdminApproval' component={ProfileSetupAfterAdminApproval} options={{ headerShown: false }} />
            <Stack.Screen name='ProfileSetup' component={ProfileSetup} options={{ headerTitle: "Profile Setup" }} />
            <Stack.Screen name='AddingKidsAndPets' component={AddingKidsAndPets} options={{ headerTitle: "Adding Kid" }} />
            <Stack.Screen name='Chat' component={Chat} options={{ headerTitle: "Chat" }} />
            <Stack.Screen name='ChatAddingGroup' component={ChatAddingGroup} options={{ headerTitle: "Chat Adding Group" }} />
            <Stack.Screen name='GroupSettings' component={GroupSettings} options={{ headerTitle: "Group Settings" }} />
            <Stack.Screen name='ProfileEdit' component={ProfileEdit} options={{ headerTitle: "Profile Edit" }} />
            <Stack.Screen name='MyAccount' component={MyAccount} options={{ headerTitle: "My Account" }} />
            <Stack.Screen name='DevicePermissions' component={DevicePermissions} options={{ headerTitle: "Device Permissions" }} />
            <Stack.Screen name='AccountDeletion' component={AccountDeletion} options={{ headerTitle: "Account Deletion" }} />
            <Stack.Screen name='Thankyou' component={Thankyou} options={{ headerShown: false }} />
            <Stack.Screen name='Confirmation' component={Confirmation} options={{ headerTitle: "Confirmation" }} />
            <Stack.Screen name='GlobalSearch' component={GlobalSearch} options={{ headerShown: false }} />
            <Stack.Screen name='About' component={About} options={{ headerShown: false }} />
            <Stack.Screen name='Aboutus' component={AboutUs} options={{ headerTitle: "About us" }} />
            <Stack.Screen name='ContactUs' component={ContactUs} options={{ headerTitle: "Contact Us" }} />
            <Stack.Screen name='PrivacyPolicy' component={PrivacyPolicy} options={{ headerTitle: "Privacy Policy" }} />
            <Stack.Screen name='TermsAndConditions' component={TermsAndConditions} options={{ headerTitle: "Terms And Conditions" }} />
            <Stack.Screen name='FAQs' component={FAQs} />
            <Stack.Screen name='ProfileDetails' component={ProfileDetails} />
            <Stack.Screen name='Profile' component={Profile} />
        </Stack.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    );
}