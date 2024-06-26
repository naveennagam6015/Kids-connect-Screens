import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Platform,
  Image,
  TouchableOpacity,
  Switch,
  Modal,
  TextInput,
  Text,
} from "react-native";
import { TextBold, TextRegular } from "../assets/fonts/CustomText";
import { color } from "../assets/colors/theme";
import {
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  Foundation,
  MaterialIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import AddKid from "../components/AddKid";

export default function Profile() {
  const navigation = useNavigation();
  const [userData, setUserData] = useState({});
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [notifications, setNotifications] = useState(false);
  const [darkmode, setDarkmode] = useState(false);
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    async function GetUserData() {
      const userDetails = JSON.parse(await AsyncStorage.getItem("userDetails"));
      console.log(userDetails);
      const date_string = userDetails.created_at;
      const date_object = new Date(date_string);

      const month = date_object.toLocaleString("default", { month: "long" });
      const year = date_object.getUTCFullYear();
      setMonth(month);
      setYear(year);
      setUserData(userDetails);
    }

    GetUserData();
  }, []);
  return (
    <ScrollView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <View style={[{ width: "35%" }, styles.profileName]}>
            <Image
              style={[styles.profilepic]}
              source={require("../assets/images/man3.jpg")}
            />
          </View>
          <View style={[{ width: "45%" }, styles.profileName]}>
            <TextBold style={{ color: color.secondaryOrange, fontSize: 16 }}>
              Krishna (M)
            </TextBold>
            <TextBold style={{ fontSize: 12 }}>krishna2024@gmail.com</TextBold>
            <TextBold style={{ color: color.neutral[300], fontSize: 12 }}>
              4387 Farland Avenue, San Antonio, TX 78212
            </TextBold>
            <TextBold style={{ color: color.neutral[300], fontSize: 12 }}>
              (Since 2022)
            </TextBold>
          </View>
          <View style={[{ width: "15%", marginTop: 10, marginRight: 7 }]}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileEdit")}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <TextRegular style={{ fontSize: 11 }}>Edit Profile</TextRegular>
              <Feather
                name="edit"
                style={{ marginLeft: 5 }}
                size={15}
                color={color.secondaryOrange}
              />
            </TouchableOpacity>
          </View>

        </View>
        <View>
          <TextBold>About</TextBold>
          <Text>Hey there! I'm Krishna, a passionate Motion Designer currently based in the busting city of the New York.In my career, I'm also a proud of mother...<TextBold>more</TextBold></Text>
        </View>
        <View>
          {/* <TextBold style={[{ justifyContent: 'center' }, styles.Headingtext]}>About</TextBold> */}
        </View>
        <TextRegular style={[styles.textnetural, { fontSize: 14 }]}>
          {userData.About}
        </TextRegular>

        <View style={[styles.fullcard, styles.flexrow]}>
          {/* First column: Image and Content */}
          <View style={[styles.flexrow, { alignItems: "center" }]}>
            <View style={{ alignItems: "center" }}>
              <View>
                <Image
                  style={[styles.profilepic]}
                  source={require("../assets/images/women.png")}
                />
              </View>

              <View style={{ alignItems: "flex-start" }}>
                <TextBold style={[styles.childrenname]}>Radha </TextBold>
              </View>
            </View>
            <View style={{ borderRightWidth: 2, borderColor: color.neutral[500], marginRight: 10 }}></View>
            <View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ marginRight: 10 }}>
                  <Image
                    style={[
                      styles.profilepic,
                      { width: 60, height: 60, marginBottom: 10 },
                    ]}
                    source={require("../assets/images/bgwhite.png")}
                  />
                </View>
                {/* <View>
                                    <Image style={[styles.profilepic, { width: 50, height: 50, marginBottom: 10 }]} source={require('../assets/images/women.png')} />
                                </View> */}
                <TouchableOpacity
                  style={{ flexDirection: "row", alignItems: "center" }}
                  onPress={() => setOpen(!open)}
                >
                  <TextBold style={{ fontSize: 16, paddingRight: 5 }}>
                    Add
                  </TextBold>

                  <View style={{ alignItems: "center" }}>
                    <View style={[styles.imageplusadd]}>
                      <AntDesign
                        name="plus"
                        size={15}
                        color={color.fontcolor}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

            </View>

          </View>
        </View>
        <View style={[styles.ProfileCard]}>
          <View style={{ marginBottom: 20 }}>
            <TextBold style={[styles.Headingtext, { marginBottom: 5 }]}>
              Referal code
            </TextBold>
            <View style={styles.ReferView}>
              <View style={{ width: "60%" }}>
                <TextInput
                  value="****"
                  style={styles.dottedInput1}
                  textAlign="left"
                />
              </View>
              <View
                style={{
                  width: "50%",
                  justifyContent: "center",
                  backgroundColor: color.primary,
                  marginLeft: -40,
                  borderRadius: 10,
                }}
              >
                <TouchableOpacity style={{ alignSelf: "center", padding: 2 }}>
                  <TextBold style={styles.Headingtext}>Refer</TextBold>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{ marginBottom: 20 }}>
            <TextBold style={[styles.Headingtext, { marginBottom: 5 }]}>
              Invitation Link
            </TextBold>
            <View style={styles.ReferView}>
              <View style={{ width: "60%" }}>
                <TextInput
                  value="kidsconnect/maddison.kd"
                  style={styles.dottedInput2}
                  textAlign="left"
                />
              </View>
              <View
                style={{
                  width: "50%",
                  justifyContent: "center",
                  backgroundColor: color.primary,
                  marginLeft: -40,
                  borderRadius: 10,
                }}
              >
                <TouchableOpacity
                  style={{ alignSelf: "center", padding: 2 }}
                  onPress={() =>
                    navigation.navigate("VerificationScreenSecondary")
                  }
                >
                  <TextBold style={styles.Headingtext}>Invite</TextBold>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity style={[styles.Card, styles.flexrow, styles.justsb]}>
          <TextBold style={[styles.Headingtext, { marginBottom: 5 }]}>
            My Connections
          </TextBold>
          <MaterialIcons
            style={{ marginTop: 8, marginRight: 8 }}
            name="arrow-forward-ios"
            size={16}
            color={color.fontcolor}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("MyAccount")}
          style={[styles.Card, styles.flexrow, styles.justsb]}
        >
          <TextBold style={[styles.Headingtext, { marginBottom: 5 }]}>
            My Account Status
          </TextBold>
          <MaterialIcons
            style={{ marginTop: 8, marginRight: 8 }}
            name="arrow-forward-ios"
            size={16}
            color={color.fontcolor}
          />
        </TouchableOpacity>
        {/* <TextBold style={[styles.Headingtext]}>Requested by</TextBold> */}
        <View style={[styles.yellowcard, { marginTop: 4 }]}>
          <View style={{ paddingHorizontal: 10 }}>
            <TextBold style={[styles.Headingtext, { marginBottom: 5 }]}>
              My Account
            </TextBold>
            <TouchableOpacity
              onPress={() => navigation.navigate("DevicePermissions")}
              style={[
                styles.flexrow,
                { justifyContent: "space-between", alignItems: "center" },
              ]}
            >
              <View
                style={[
                  styles.flexrow,
                  { alignItems: "center", marginVertical: 8 },
                ]}
              >
                <MaterialCommunityIcons
                  name="lock-check"
                  size={24}
                  color={color.white}
                />
                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>
                  Device Permissions
                </TextBold>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                size={16}
                color={color.fontcolor}
              />
            </TouchableOpacity>
            <View style={[styles.line]}></View>
            <TouchableOpacity
              onPress={() => navigation.navigate("ChangePassword")}
              style={[
                styles.flexrow,
                { justifyContent: "space-between", alignItems: "center" },
              ]}
            >
              <View
                style={[
                  styles.flexrow,
                  { alignItems: "center", marginVertical: 8 },
                ]}
              >
                <FontAwesome5 name="key" size={24} color={color.white} />
                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>
                  Change Password{" "}
                </TextBold>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                size={16}
                color={color.fontcolor}
              />
            </TouchableOpacity>
            <View style={[styles.line]}></View>
            <View
              style={[
                styles.flexrow,
                { justifyContent: "space-between", alignItems: "center" },
              ]}
            >
              <View
                style={[
                  styles.flexrow,
                  { alignItems: "center", marginVertical: 8 },
                ]}
              >
                <MaterialIcons name="security" size={24} color={color.white} />
                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>
                  Security
                </TextBold>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                size={16}
                color={color.fontcolor}
              />
            </View>
            {/* <View style={[styles.line]}></View>
            <View
              style={[
                styles.flexrow,
                { justifyContent: "space-between", alignItems: "center" },
              ]}
            >
              <View
                style={[
                  styles.flexrow,
                  { alignItems: "center", marginVertical: 8 },
                ]}
              >
                <FontAwesome5 name="language" size={24} color={color.white} />
                <TextBold style={{ marginLeft: 15, fontSize: 16 }}>
                  Language Settings
                </TextBold>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                size={16}
                color={color.fontcolor}
              />
            </View> */}
          </View>
        </View>
        <View style={[styles.yellowcard]}>
          <View style={{ paddingHorizontal: 10 }}>
            <TextBold style={[styles.Headingtext, { marginBottom: 5 }]}>
              Preference
            </TextBold>
            <View
              style={[
                styles.flexrow,
                { justifyContent: "space-between", alignItems: "center" },
              ]}
            >
              <View
                style={[
                  styles.flexrow,
                  { alignItems: "center", marginVertical: 8 },
                ]}
              >
                <MaterialIcons name="dark-mode" size={24} color={color.white} />
                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>
                  Dark Mode
                </TextBold>
              </View>
              <Switch
                trackColor={{
                  false: color.secondaryOrange,
                  true: color.success,
                }}
                thumbColor={darkmode ? color.white : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() =>
                  setDarkmode((previousState) => !previousState)
                }
                value={darkmode}
              />
            </View>
            <View style={[styles.line]}></View>
            <View
              style={[
                styles.flexrow,
                { justifyContent: "space-between", alignItems: "center" },
              ]}
            >
              <View
                style={[
                  styles.flexrow,
                  { alignItems: "center", marginVertical: 8 },
                ]}
              >
                <MaterialIcons
                  name="notifications-active"
                  size={24}
                  color={color.white}
                />
                {/* <MaterialIcons name="notifications-off" size={24} color={color.white} /> */}
                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>
                  Notifications
                </TextBold>
              </View>
              <Switch
                trackColor={{
                  false: color.secondaryOrange,
                  true: color.success,
                }}
                thumbColor={notifications ? color.white : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() =>
                  setNotifications((previousState) => !previousState)
                }
                value={notifications}
              />
            </View>
          </View>
        </View>
        <View style={[styles.yellowcard]}>
          <View style={{ paddingHorizontal: 10 }}>
            <TextBold style={[styles.Headingtext, { marginBottom: 5 }]}>
              Support
            </TextBold>
            <TouchableOpacity
              onPress={() => navigation.navigate("ContactUs")}
              style={[
                styles.flexrow,
                { justifyContent: "space-between", alignItems: "center" },
              ]}
            >
              <View
                style={[
                  styles.flexrow,
                  { alignItems: "center", marginVertical: 8 },
                ]}
              >
                <MaterialIcons
                  name="contact-phone"
                  size={24}
                  color={color.white}
                />
                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>
                  Contact Us
                </TextBold>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                size={16}
                color={color.fontcolor}
              />
            </TouchableOpacity>
            <View style={[styles.line]}></View>
            <TouchableOpacity
              onPress={() => navigation.navigate("TermsAndConditions")}
              style={[
                styles.flexrow,
                { justifyContent: "space-between", alignItems: "center" },
              ]}
            >
              <View
                style={[
                  styles.flexrow,
                  { alignItems: "center", marginVertical: 8 },
                ]}
              >
                <Foundation
                  name="clipboard-notes"
                  style={{ marginLeft: 5 }}
                  size={28}
                  color={color.white}
                />
                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>
                  Terms & Conditions
                </TextBold>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                size={16}
                color={color.fontcolor}
              />
            </TouchableOpacity>
            <View style={[styles.line]}></View>
            <TouchableOpacity
              onPress={() => navigation.navigate("PrivacyPolicy")}
              style={[
                styles.flexrow,
                { justifyContent: "space-between", alignItems: "center" },
              ]}
            >
              <View
                style={[
                  styles.flexrow,
                  { alignItems: "center", marginVertical: 8 },
                ]}
              >
                <MaterialIcons
                  name="privacy-tip"
                  size={24}
                  color={color.white}
                />
                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>
                  Privacy Policy
                </TextBold>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                size={16}
                color={color.fontcolor}
              />
            </TouchableOpacity>
            <View style={[styles.line]}></View>
            <TouchableOpacity
              onPress={() => navigation.navigate("FAQs")}
              style={[
                styles.flexrow,
                { justifyContent: "space-between", alignItems: "center" },
              ]}
            >
              <View
                style={[
                  styles.flexrow,
                  { alignItems: "center", marginVertical: 8 },
                ]}
              >
                <MaterialIcons name="dark-mode" size={24} color={color.white} />
                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>
                  FAQs
                </TextBold>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                size={16}
                color={color.fontcolor}
              />
            </TouchableOpacity>
            <View style={[styles.line]}></View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Aboutus")}
              style={[
                styles.flexrow,
                { justifyContent: "space-between", alignItems: "center" },
              ]}
            >
              <View
                style={[
                  styles.flexrow,
                  { alignItems: "center", marginVertical: 8 },
                ]}
              >
                <FontAwesome name="group" size={22} color={color.white} />
                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>
                  About us
                </TextBold>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                size={16}
                color={color.fontcolor}
              />
            </TouchableOpacity>
            <View style={[styles.line]}></View>
            <View
              style={[
                styles.flexrow,
                { justifyContent: "space-between", alignItems: "center" },
              ]}
            >
              <View
                style={[
                  styles.flexrow,
                  { alignItems: "center", marginVertical: 8 },
                ]}
              >
                <MaterialIcons name="dark-mode" size={24} color={color.white} />
                <TextBold style={{ marginLeft: 20, fontSize: 16 }}>
                  Help
                </TextBold>
              </View>
              <MaterialIcons
                name="arrow-forward-ios"
                size={16}
                color={color.fontcolor}
              />
            </View>
          </View>
        </View>

        <View style={{ alignSelf: "center", marginVertical: 20 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={[
              styles.flexrow,
              styles.Card2,
              {
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 10,
              },
            ]}
          >
            <AntDesign name="logout" size={24} color="black" />
          </TouchableOpacity>
          <TextBold style={{ fontSize: 16 }}> Logout</TextBold>
        </View>

        <Modal animationType="slide" transparent={true} visible={open}>
          <View style={{ justifyContent: 'flex-end', flex: 1 }}>
            <AddKid closed={() => setOpen(!open)} />
          </View>
        </Modal>
      </SafeAreaView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  ProfileCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 2,
  },
  ReferView: {
    flexDirection: "row",
    width: "100%",
  },
  dottedInput1: {
    padding: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    width: "100%",
    borderStyle: "dotted",
    fontSize: 40,
    alignSelf: "center",
  },
  dottedInput2: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#000",
    width: "100%",
    borderStyle: "dotted",
    fontSize: 16,
    color: "blue",
    alignSelf: "center",
  },
  justsb: {
    justifyContent: "space-between",
  },
  textnetural: {
    color: color.neutral[500],
    marginVertical: 2,
  },
  childrenname: {
    fontSize: 18,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  profilepicsmall: {
    marginRight: 8,
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  profilepic: {
    marginRight: 8,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: "#000",
    borderWidth: 0.5,
  },
  Card2: {
    borderRadius: 10,
    marginVertical: 10,
    padding: 14,
    width: "16%",
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: color.white,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  Card1: {
    borderRadius: 10,
    marginVertical: 10,
    padding: 14,
    backgroundColor: color.white,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  Carddotted: {
    borderRadius: 10,
    marginTop: 4,
    width: "40%",
    justifyContent: "space-between",
    borderStyle: "dotted",
    marginBottom: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: color.neutral[300],
    backgroundColor: color.white,
  },
  Card: {
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: color.neutral[300],
    // backgroundColor: color.white,
  },
  flexrow: {
    flexDirection: "row",
  },
  line: {
    borderBottomWidth: 0.5,
    borderBottomColor: color.white,
  },
  Headingtext: {
    fontSize: 20,
    marginVertical: 5,
  },
  fullcard: {
    backgroundColor: color.primary,
    marginVertical: 10,
    borderRadius: 8,
    padding: 10,
  },
  yellowcard: {
    backgroundColor: color.primary,
    borderRadius: 8,
    marginTop: 18,
    padding: 10,
  },
  container: {
    padding: 15,
    marginBottom: 40,
    justifyContent: "center",
  },
  profileName: {
    justifyContent: "center",
  },
  imageplusadd: {
    padding: 5,
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    borderRadius: 100,
    marginRight: 10,
    backgroundColor: color.white
  },
});
