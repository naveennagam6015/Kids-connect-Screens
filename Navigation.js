import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import {
  Modal,
  View,
  Text,
  Button,
  Platform,
  TouchableOpacity,
  Alert,
} from "react-native";
import Home from "./screens/Home";
import Appointment from "./screens/Appointment";
import Profile from "./screens/Profile";
import Requests from "./screens/Requests";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import ProfileSetupAfterAdminApproval from "./screens/ProfileSetupAfterAdminApproval";
import ProfileVerification from "./screens/ProfileVerification";
import AddingKidsAndPets from "./screens/AddingKidsAndPets";
import Chat from "./screens/Chat";
import ChatAddingGroup from "./screens/ChatAddingGroup";
import GroupSettings from "./screens/GroupSettings";
import ProfileEdit from "./screens/ProfileEdit";
import MyAccount from "./screens/MyAccount";
import DevicePermissions from "./screens/DevicePermissions";
import AccountDeletion from "./screens/AccountDeletion";
import { color } from "./assets/colors/theme";
import { StyleSheet } from "react-native";
import Thankyou from "./screens/Thankyou";
import Test from "./Test";
import ProfileSetup from "./screens/ProfileSetup";
import Confirmation from "./screens/Confirmation ";
import EventConfirmation from "./screens/EventConfirmation";
import { TextBold } from "./assets/fonts/CustomText";
import GlobalSearch from "./screens/GlobalSearch";
import ChatInner from "./screens/ChatInner";
import ChatInner1 from "./screens/ChatInner1";
import ChatInner2 from "./screens/ChatInner2";

import About from "./screens/About";
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
import PrivacyPolicy from "./screens/PrivacyPolicy";
import TermsAndConditions from "./screens/TermsAndConditions";
import FAQs from "./screens/FAQs";
import ProfileDetails from "./components/ProfileDetails";
import PasswordSettingScr2 from "./screens/PasswordSettingScr2";
import AddingKidsAndPets2 from "./screens/AddingKidsAndPets2";
import VerificationScreen from "./screens/VerificationCode";
import Connecting from "./screens/Connecting";
import VerificationScreenSecondary from "./screens/VerificationScreenSecondary";
import KidsProfileScr2 from "./screens/KidsProfileScn2";
import { MaterialIcons } from "@expo/vector-icons";
import GroupInner from "./screens/GroupInner";
const BottomTab = createBottomTabNavigator();

function AppointmentModal({ isVisible, onClose }) {
  const navigation = useNavigation();

  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View style={{ flex: 1, opacity: 0 }} />
      <View
        style={{
          height: "10%",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 15,
          backgroundColor: color.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          justifyContent: "center",
          ...Platform.select({
            ios: {
              shadowColor: "black",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 4,
            },
            android: {
              elevation: 30,
            },
          }),
        }}
      >
        <View style={{ paddingHorizontal: 20 }}>
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Appointment");
                onClose();
              }}
              style={{
                borderRadius: 8,
                alignSelf: "center",
                flexDirection: "row",
                textAlign: "center",
                justifyContent: "center",
                borderWidth: 1.5,
                borderColor: color.accent,
                paddingVertical: 16,
                width: "48%",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <TextBold style={{ fontSize: 16 }}>Discover</TextBold>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("ProfileSetup");
                onClose();
              }}
              style={{
                borderRadius: 8,
                alignSelf: "center",
                flexDirection: "row",
                textAlign: "center",
                borderWidth: 1.5,
                borderColor: color.primary,
                justifyContent: "center",
                backgroundColor: color.primary,
                paddingVertical: 16,
                width: "48%",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <TextBold style={{ fontSize: 16, color: "#fff" }}>
                  Connect Now
                </TextBold>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

function BottomNavigation({ navigation }) {
  // const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const headerRight = ({ item }) => {
    return (
      <TouchableOpacity
        style={{ marginRight: 20 }}
        onPress={() => navigation.navigate("Chat")}
      >
        <View>
          <MaterialIcons name="message" size={23} color="black" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused, size }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Appointment") {
              iconName = focused ? "add-circle" : "add-circle-outline";
            } else if (route.name === "Requests") {
              iconName = focused ? "list" : "list-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "person-circle" : "person-circle-outline";
            }
            return <Ionicons name={iconName} size={30} color={color} />;
          },
          tabBarActiveTintColor: color.primary,
          tabBarInactiveTintColor: color.neutral[100],
          tabBarLabelStyle: {
            color: "#000",
          },
          tabBarStyle: {
            position: "absolute",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: "transparent",
            elevation: 0,
            shadowOpacity: 0,
            padding: 5,
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
          options={{ headerRight: headerRight }}
        />
        <BottomTab.Screen
          options={{ headerRight: headerRight }}
          name="Appointment"
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              e.preventDefault();
              toggleModal();
            },
          })}
          component={Appointment}
        />
        <BottomTab.Screen
          name="Requests"
          component={Requests}
          options={{ headerRight: headerRight }}
        />
        <BottomTab.Screen name="Profile" component={Profile} />
      </BottomTab.Navigator>
      <AppointmentModal isVisible={isModalVisible} onClose={toggleModal} />
    </>
  );
}
const Stack = createStackNavigator();

function StackNavigation() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName="VerificationScreen">
      <Stack.Screen
        name="VerificationScreen"
        component={VerificationScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Passwordsetup"
        component={PasswordSettingScr2}
        options={{ headerTitle: "Step 2 of 3" }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Test"
        component={Test}
        options={{ headerShown: false, presentation: "modal" }}
      />
      <Stack.Screen
        name="BottomNavigation"
        component={BottomNavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Registration}
        options={{ headerTitle: "Step 1 of 2" }}
      />
      <Stack.Screen
        name="ProfileVerification"
        component={ProfileVerification}
        options={{ headerTitle: "Profile Verification" }}
      />
      <Stack.Screen
        name="ProfileSetupAfterAdminApproval"
        component={ProfileSetupAfterAdminApproval}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfileSetup"
        component={ProfileSetup}
        options={{ headerTitle: "Profile Setup" }}
      />
      <Stack.Screen
        name="AddingKidsAndPets"
        component={AddingKidsAndPets}
        options={{ headerTitle: "Adding Kids" }}
      />
      <Stack.Screen
        name="AddingKidsAndPets2"
        component={AddingKidsAndPets2}
        options={{ headerTitle: "Adding Kids" }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{ headerTitle: "Chat" }}
      />
      <Stack.Screen
        name="GroupInner"
        component={GroupInner}
      // options={{
      //   headerTitle: () => (
      //     <TouchableOpacity onPress={() =>alert("hii")}>
      //       <Text style={{ color: 'white', fontSize: 16 }}>Birthday Party</Text>
      //     </TouchableOpacity>
      //   ),
      //   headerStyle: { backgroundColor: color.primary },
      // }}
      />
      <Stack.Screen
        name="ChatInner"
        component={ChatInner}
        options={{
          headerTitle: () => (
            <TouchableOpacity onPress={() => navigation.navigate("GroupInner")}>
              <Text style={{ color: 'white', fontSize: 16 }}>Birthday Party</Text>
            </TouchableOpacity>
          ),
          headerStyle: { backgroundColor: color.primary },
        }}
      />
      <Stack.Screen
        name="ChatInner1"
        component={ChatInner1}
        options={{
          headerTitle: "Combined Study",
          headerStyle: { backgroundColor: color.primary },
        }}
      />
      <Stack.Screen
        name="ChatInner2"
        component={ChatInner2}
        options={{
          headerTitle: "Get To Gether",
          headerStyle: { backgroundColor: color.primary },
        }}
      />
      <Stack.Screen
        name="ChatAddingGroup"
        component={ChatAddingGroup}
        options={{ headerTitle: "Chat Adding Group" }}
      />
      <Stack.Screen
        name="GroupSettings"
        component={GroupSettings}
        options={{ headerTitle: "Group Settings" }}
      />
      <Stack.Screen
        name="ProfileEdit"
        component={ProfileEdit}
        options={{ headerTitle: "Profile Edit" }}
      />
      <Stack.Screen
        name="MyAccount"
        component={MyAccount}
        options={{ headerTitle: "My Account" }}
      />
      <Stack.Screen
        name="DevicePermissions"
        component={DevicePermissions}
        options={{ headerTitle: "Device Permissions" }}
      />
      <Stack.Screen
        name="AccountDeletion"
        component={AccountDeletion}
        options={{ headerTitle: "Account Deletion" }}
      />
      <Stack.Screen
        name="Thankyou"
        component={Thankyou}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Confirmation"
        component={Confirmation}
        options={{ headerTitle: "Confirmation" }}
      />
      <Stack.Screen
        name="GlobalSearch"
        component={GlobalSearch}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Aboutus"
        component={AboutUs}
        options={{ headerTitle: "About us" }}
      />
      <Stack.Screen
        name="ContactUs"
        component={ContactUs}
        options={{ headerTitle: "Contact Us" }}
      />
      <Stack.Screen
        name="PrivacyPolicy"
        component={PrivacyPolicy}
        options={{ headerTitle: "Privacy Policy" }}
      />
      <Stack.Screen
        name="TermsAndConditions"
        component={TermsAndConditions}
        options={{ headerTitle: "Terms And Conditions" }}
      />
      <Stack.Screen
        name="EventConfirmation"
        component={EventConfirmation}
        options={{ headerTitle: false }}
      />
      <Stack.Screen
        name="KidsProfileScr2"
        component={KidsProfileScr2}
        options={{ headerTitle: "KidsProfile" }}
      />
      <Stack.Screen name="FAQs" component={FAQs} />
      <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
      <Stack.Screen name="Connecting" component={Connecting} />
      <Stack.Screen
        name="VerificationScreenSecondary"
        component={VerificationScreenSecondary}
      />

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