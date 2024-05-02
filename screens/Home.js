import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Platform,
  Pressable,
  Image,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";
import { color } from "../assets/colors/theme";
import Carousel from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { Calendar } from "react-native-calendars";
import {
  SkeletonContainer,
  GradientProps,
} from "react-native-dynamic-skeletons";
import { TextBold, TextLight, TextRegular } from "../assets/fonts/CustomText";
import {
  AntDesign,
  FontAwesome,
  Feather,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

import axios from "axios";
import Icon from "react-native-vector-icons/MaterialIcons";
import { BASEURL } from "@env";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import ProfileDetails from "../components/ProfileDetails";
import { useNavigation } from "@react-navigation/native";
import KidsProfileScr2 from "./KidsProfileScn2";
import AnotherKidDetails from "../components/AnotherKidDetails";
import AnotherParentDetails from "../components/AnotherParentDetails";
const { width: screenWidth } = Dimensions.get("window");

const Gradient = (props) => <LinearGradient {...props} />;
export default function Home({ close }) {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [profileDetails, setProfileDetails] = useState(false);
  const [anotherkiddetails, setAnotherkiddetails] = useState(false);
  const onClose = () => {
    setOpen(false);
    setProfileDetails(false);
    setKiddetails(false);
    setAnotherparentdetails(false);
  };
  const [data, setData] = useState([{ image: "" }]);
  const carouselRef = useRef(null);
  const bottomTabBarHeight = useBottomTabBarHeight();
  const [activeIndex, setActiveIndex] = useState(0);
  const [bannerLoading, setBannerLoading] = useState(false);
  const [interests, setInterests] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newInterest, setNewInterest] = useState("");
  const [kiddetails, setKiddetails] = useState("");
  const [anotherparentdetails, setAnotherparentdetails] = useState("");

  const handleChangeInterest = (interest) => {
    setNewInterest(interest);
    // You can perform any additional actions here, such as updating state in this component
  };

  // Function to add interest
  const handleAddInterest = () => {
    if (newInterest === "") {
      Alert.alert("Please Enter an interest");
    } else {
      setInterests([...interests, newInterest]);
      setIsModalVisible(false);
      setNewInterest("");
    }
  };

  // Function to remove interest
  const handleRemoveInterest = (index) => {
    const updatedInterests = [...interests];
    updatedInterests.splice(index, 1);
    setInterests(updatedInterests);
  };
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        {/* <Text style={styles.title}>{item.title}</Text> */}
        <Image
          style={{ width: "95%", height: "100%", borderRadius: 10 }}
          source={{ uri: `${BASEURL}${item.image}` }}
          resizeMode="cover"
        />
      </View>
    );
  };

  useEffect(() => {
    setBannerLoading(true);
    axios({
      method: "get",
      url: `${BASEURL}api/allBanners`,
      headers: {
        Accept: "*/*",
      },
    })
      .then((res) => {
        const newBannerData = res.data.data.map((banner) => ({
          image: banner.image,
        }));
        setData(newBannerData);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setTimeout(() => {
          setBannerLoading(false);
        }, 2000);
      });
  }, []);

  function BannerSkeletonLoading() {
    return <View></View>;
  }

  return (
    <ScrollView style={{ paddingBottom: bottomTabBarHeight }}>
      <TextBold
        style={[styles.Headingtext, { marginHorizontal: 15, marginTop: 15 }]}
      >
        Glance Area
      </TextBold>
      {bannerLoading && (
        <SkeletonContainer isLoading={bannerLoading} Gradient={Gradient}>
          <View style={styles.slide}></View>
        </SkeletonContainer>
      )}

      {!bannerLoading && (
        <Carousel
          ref={carouselRef}
          layout="default"
          data={data}
          renderItem={renderItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          loop
          // loopClonesPerSide={data.length}
          autoplay
          autoplayInterval={3000}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      )}
      <View style={[styles.container]}>
        <View style={[styles.flexrow, styles.justiffsb]}>
          {/* <TouchableOpacity style={[styles.Buttoncard, styles.Buttoncardwidth]}>
            <View style={[styles.flexrow]}>
              <TextBold style={[styles.btnPrimaryTextsize]}>
                Circle Requests
              </TextBold>
            </View>
          </TouchableOpacity> */}
          {/* <TouchableOpacity
            style={[styles.Buttoncard2, styles.Buttoncardwidth]}
          >
            <View style={[styles.flexrow]}>
              <TextBold style={[styles.btnPrimaryTextsize]}>
                All Requests
              </TextBold>
            </View>
          </TouchableOpacity> */}
        </View>

        {/* <View style={[styles.flexrow]}>
                    <View style={[styles.innerbtn1]}>
                        <Pressable>
                            <TextRegular>Individuals</TextRegular>
                        </Pressable>
                    </View>
                    <View style={[styles.innerbtn]}>
                        <Pressable>
                            <TextRegular>Circles</TextRegular>
                        </Pressable>
                    </View>
                </View> */}

        <View>
          <TextBold style={[styles.Headingtext]}>Calendar Overview</TextBold>
          <Calendar />
          <View>
            <TouchableOpacity style={[styles.btnPrimary, { flexDirection: "row", justifyContent: "space-between" }]}>
              <Text style={{ color: color.fontcolor, fontWeight: "bold", textAlign: 'center', fontSize: 18 }}>Previous Events</Text>
              <View
                style={[styles.flexrow, { alignItems: "center" }]}
              >
                <TextBold style={[styles.btnPrimaryTextsize]}>
                  View All
                </TextBold>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color={color.primary}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btnPrimary, { flexDirection: "row", justifyContent: "space-between" }]}>
              <Text style={{ color: color.fontcolor, fontWeight: "bold", textAlign: 'center', fontSize: 18 }}>Faviourite Events</Text>
              <View
                style={[styles.flexrow, { alignItems: "center" }]}
              >
                <TextBold style={[styles.btnPrimaryTextsize]}>
                  View All
                </TextBold>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color={color.primary}
                />
              </View>
            </TouchableOpacity>
          </View>
          <TextBold style={[styles.Headingtext]}>Active events</TextBold>
          <View style={[styles.Cardnodata]}>
            <View style={[styles.innercardnodata, styles.flexrow]}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 100,
                    backgroundColor: color.neutral[500],
                    marginBottom: 10,
                  }}
                ></View>
                <View
                  style={{
                    padding: 8,
                    backgroundColor: color.neutral[300],
                    width: "90%",
                  }}
                ></View>
              </View>
              <View
                style={{ justifyContent: "flex-end", alignItems: "center" }}
              >
                <TextBold style={{ fontSize: 20 }}>Oops..!</TextBold>
                <TextRegular style={{ fontSize: 16 }}>
                  No appointments yet{" "}
                </TextRegular>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 100,
                    backgroundColor: color.neutral[500],
                    marginBottom: 10,
                  }}
                ></View>
                <View
                  style={{
                    padding: 8,
                    backgroundColor: color.neutral[300],
                    width: "90%",
                  }}
                ></View>
              </View>
            </View>
            <View style={[styles.innercard2, styles.flexrow]}>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 100,
                    backgroundColor: color.neutral[500],
                    marginBottom: 10,
                  }}
                ></View>
                <View
                  style={{
                    padding: 8,
                    backgroundColor: color.neutral[300],
                    width: "90%",
                  }}
                ></View>
              </View>
              <View
                style={{ alignItems: "center", justifyContent: "flex-start" }}
              >
                <TouchableOpacity onPress={() => navigation.navigate("ProfileSetup")} style={[styles.Buttoncardnodata]}>
                  <View

                    style={[styles.flexrow, { alignItems: "center" }]}
                  >
                    <TextBold style={[styles.btnPrimaryTextsize]}>
                      Connect Now
                    </TextBold>
                    <MaterialIcons
                      name="keyboard-arrow-right"
                      size={24}
                      color="black"
                    />
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    padding: 8,
                    backgroundColor: color.neutral[300],
                    width: "70%",
                  }}
                ></View>
              </View>
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: 100,
                    backgroundColor: color.neutral[500],
                    marginBottom: 10,
                  }}
                ></View>
                <View
                  style={{
                    padding: 8,
                    backgroundColor: color.neutral[300],
                    width: "90%",
                  }}
                ></View>
              </View>
            </View>
          </View>
          <TextBold style={[styles.Headingtext]}>Previous events</TextBold>

          <View
            style={{
              backgroundColor: "#fff",
              padding: 20,
              borderRadius: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ marginTop: 10 }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("BottomNavigation", {
                      screen: "Profile",
                    })
                  }>
                  <Image
                    source={require("../assets/images/man3.jpg")}
                    style={{
                      position: "absolute",
                      width: 40,
                      height: 40,
                      top: -15,
                      right: -10,
                      borderRadius: 20,
                      borderColor: color.primary,
                      borderWidth: 3,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity

                  onPress={() => setKiddetails(!kiddetails)}
                >
                  <Image
                    source={require("../assets/images/bgwhite.png")}
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 35,
                      borderColor: color.primary,
                      borderWidth: 3,
                    }}
                  />
                </TouchableOpacity>
                <TextBold style={{ alignSelf: "center", fontSize: 15 }}>
                  Soumya
                </TextBold>
                <TextRegular style={{ alignSelf: "center", fontSize: 12 }}>
                  Krishna (Father)
                </TextRegular>
              </View>
              <View style={{ justifyContent: "center", alignSelf: "center" }}>
                <AntDesign name="arrowright" size={50} color="black" />
              </View>
              <View style={{ marginTop: 10 }}>
                <TouchableOpacity
                  onPress={() => setAnotherparentdetails(!anotherparentdetails)}
                >
                  <Image
                    source={require("../assets/images/2women.jpg")}
                    style={{
                      position: "absolute",
                      width: 40,
                      height: 40,
                      top: -15,
                      right: -10,
                      borderRadius: 20,
                      borderColor: color.primary,
                      borderWidth: 3,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setAnotherkiddetails(!anotherkiddetails)} >
                  <Image
                    source={require("../assets/images/KID.jpg")}
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 35,
                      borderColor: color.primary,
                      borderWidth: 3,
                    }}
                  />
                </TouchableOpacity>
                <TextBold style={{ alignSelf: "center", fontSize: 15 }}>
                  Anita
                </TextBold>
                <TextRegular style={{ alignSelf: "center", fontSize: 12 }}>
                  Tulika (Mother)
                </TextRegular>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 15,
              }}
            >
              <View>
                <TextRegular>17 Feb (Monday)</TextRegular>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name="timer" size={24} color="black" />
                  <TextRegular style={{ justifyContent: "center" }}>
                    3 Hrs
                  </TextRegular>
                </View>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('ChatInner')} style={{ padding: 5, marginHorizontal: 10 }}>
                <MaterialIcons name="message" size={20} color="black" />
                <TextRegular style={{ fontSize: 12 }}>Chat</TextRegular>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setAnotherkiddetails(!anotherkiddetails)}
                style={{
                  backgroundColor: color.primary,
                  padding: 10,
                  borderRadius: 10,
                  justifyContent: "center",
                }}
              >
                <TextBold>More Details &gt;&gt;</TextBold>
              </TouchableOpacity>
            </View>
          </View>

          {/* dummy code start */}
          <View
            style={{
              backgroundColor: "#fff",
              padding: 20,
              marginVertical: 10,

              borderRadius: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View style={{ marginTop: 10 }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("BottomNavigation", {
                      screen: "Profile",
                    })
                  }>
                  <Image
                    source={require("../assets/images/man3.jpg")}
                    style={{
                      position: "absolute",
                      width: 40,
                      height: 40,
                      top: -15,
                      right: -10,
                      borderRadius: 20,
                      borderColor: color.primary,
                      borderWidth: 3,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity

                  onPress={() => setKiddetails(!kiddetails)}
                >
                  <Image
                    source={require("../assets/images/bgwhite.png")}
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 35,
                      borderColor: color.primary,
                      borderWidth: 3,
                    }}
                  />
                </TouchableOpacity>
                <TextBold style={{ alignSelf: "center", fontSize: 15 }}>
                  Soumya
                </TextBold>
                <TextRegular style={{ alignSelf: "center", fontSize: 12 }}>
                  Krishna (Father)
                </TextRegular>
              </View>
              <View style={{ justifyContent: "center", alignSelf: "center" }}>
                <AntDesign name="arrowright" size={50} color="black" />
              </View>
              <View style={{ marginTop: 10 }}>
                <TouchableOpacity
                  onPress={() => setAnotherparentdetails(!anotherparentdetails)}
                >
                  <Image
                    source={require("../assets/images/2women.jpg")}
                    style={{
                      position: "absolute",
                      width: 40,
                      height: 40,
                      top: -15,
                      right: -10,
                      borderRadius: 20,
                      borderColor: color.primary,
                      borderWidth: 3,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setAnotherkiddetails(!anotherkiddetails)} >
                  <Image
                    source={require("../assets/images/KID.jpg")}
                    style={{
                      width: 70,
                      height: 70,
                      borderRadius: 35,
                      borderColor: color.primary,
                      borderWidth: 3,
                    }}
                  />
                </TouchableOpacity>
                <TextBold style={{ alignSelf: "center", fontSize: 15 }}>
                  Anita
                </TextBold>
                <TextRegular style={{ alignSelf: "center", fontSize: 12 }}>
                  Tulika (Mother)
                </TextRegular>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 15,
              }}
            >
              <View>
                <TextRegular>17 Feb (Monday)</TextRegular>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Ionicons name="timer" size={24} color="black" />
                  <TextRegular style={{ justifyContent: "center" }}>
                    3 Hrs
                  </TextRegular>
                </View>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('ChatInner')} style={{ padding: 5, marginHorizontal: 10 }}>
                <MaterialIcons name="message" size={20} color="black" />
                <TextRegular style={{ fontSize: 12 }}>Chat</TextRegular>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setAnotherkiddetails(!anotherkiddetails)}
                style={{
                  backgroundColor: color.primary,
                  padding: 10,
                  borderRadius: 10,
                  justifyContent: "center",
                }}
              >
                <TextBold>More Details &gt;&gt;</TextBold>
              </TouchableOpacity>
            </View>
          </View>
          {/* dummy code end */}

          {/* <View style={[styles.Card]}>
          <TextBold style={[styles.Headingtext]}>Active</TextBold>

          <View style={[styles.Card]}>
            <View style={[styles.innercard1, styles.flexrow]}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("BottomNavigation", { screen: "Profile" })
                }
                style={{ alignItems: "center" }}
              >
                <View>
                  <Image
                    style={[styles.profilepic]}
                    source={require("../assets/images/man3.jpg")}
                  />
                </View>
                <View>
                  <TextBold style={[styles.childrenname]}>Krishna</TextBold>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setAnotherparentdetails(!anotherparentdetails)}
                style={{ alignItems: "center" }}
              >
                <View>
                  <Image
                    style={[styles.profilepic]}
                    source={require("../assets/images/2women.jpg")}
                  />
                </View>
                <View>
                  <TextBold style={[styles.childrenname]}>Tulika (F)</TextBold>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.innercard2, styles.flexrow]}>
              <TouchableOpacity
                onPress={() => setKiddetails(!kiddetails)}
                style={{ alignItems: "flex-start" }}
              >
                <View>
                  <Image
                    style={[styles.profilepic]}
                    source={require("../assets/images/bgwhite.png")}
                  />
                </View>
                <View>
                  <TextBold style={[styles.childrenname]}>
                    Soumya{" "}
                    <TextBold style={{ color: color.neutral[300] }}>
                      (M)
                    </TextBold>
                  </TextBold>
                </View>
              </TouchableOpacity>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TextRegular>3-5hrs</TextRegular>
                <AntDesign
                  name="arrowright"
                  size={18}
                  color={color.neutral[300]}
                />
                <TextRegular>Feb 17th | Monday</TextRegular>
              </View>
              <TouchableOpacity
                onPress={() => setAnotherkiddetails(!anotherkiddetails)}
                style={{ alignItems: "flex-end" }}
              >
                <View>
                  <Image
                    style={[styles.profilepic]}
                    source={require("../assets/images/KID.jpg")}
                  />
                </View>
                <View>
                  <TextBold style={[styles.childrenname]}>
                    Anita{" "}
                    <TextBold style={{ color: color.neutral[300] }}>
                      (F)
                    </TextBold>
                  </TextBold>
                </View>
              </TouchableOpacity>
            </View>
          </View> */}
          {/* <View
            style={[
              styles.Card,
              styles.flexrow,
              { justifyContent: "space-between", alignItems: "center" },
            ]}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Chat")}
              style={{ padding: 5, marginHorizontal: 10 }}
            >
              <View>
                <MaterialIcons name="message" size={20} color="black" />
              </View>
              <View>
                <TextRegular style={{ fontSize: 12 }}>Chat</TextRegular>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 5, marginHorizontal: 10 }}>
              <View>
                <Ionicons name="call" size={20} color="black" />
              </View>
              <View>
                <TextRegular style={{ fontSize: 12 }}>Call</TextRegular>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setAnotherkiddetails(!anotherkiddetails)}
              style={[styles.Buttoncardmoredetails, styles.Buttoncardwidth3]}
            >
              <View style={[styles.flexrow]}>
                <TextBold style={[styles.childrenname]}>More Details</TextBold>
                <AntDesign
                  style={[styles.arrow]}
                  name="doubleright"
                  size={16}
                  color={color.fontcolor}
                />
              </View>
            </TouchableOpacity>
          </View> */}
        </View>
        <View>
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={[styles.flexrow]}>
              <TextRegular style={[styles.childrenname]}>View all</TextRegular>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={24}
                color={color.primary}
              />
            </TouchableOpacity>
          </View>
        </View>


        {/* <View style={[styles.Card]}>
          <View style={[styles.innercard2, styles.flexrow]}>
            <TouchableOpacity
              onPress={() => setKiddetails(!kiddetails)}
              style={{ alignItems: "flex-start" }}
            >
              <View>
                <Image
                  style={[styles.profilepic, styles.activeprofilr]}
                  source={require("../assets/images/bgwhite.png")}
                />
              </View>
              <View>
                <TextBold style={[styles.childrenname]}>Soumya(M)</TextBold>
              </View>
            </TouchableOpacity>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TextRegular>3-5hrs</TextRegular>
              <AntDesign
                name="arrowright"
                size={18}
                color={color.neutral[300]}
              />
              <TextRegular>Feb 17th | Monday</TextRegular>
            </View>
            <TouchableOpacity
              onPress={() => setAnotherkiddetails(!anotherkiddetails)}
              style={{ alignItems: "flex-end" }}
            >
              <View>
                <Image
                  style={[styles.profilepic]}
                  source={require("../assets/images/KID.jpg")}
                />
              </View>
              <View>
                <TextBold style={[styles.childrenname]}>Anita(F)</TextBold>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={[
              styles.flexrow,
              { justifyContent: "space-between", alignItems: "center" },
            ]}
          >
            <View style={{ width: "35%" }}>
              <View style={[styles.flexrow, styles.dot]}>
                <TextRegular>
                  You have connected previously 3 times.
                </TextRegular>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Chat")}
              style={{ padding: 5, marginHorizontal: 10 }}
            >
              <View>
                <MaterialIcons name="message" size={20} color="black" />
              </View>
              <View>
                <TextRegular style={{ fontSize: 12 }}>Chat</TextRegular>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setAnotherkiddetails(!anotherkiddetails)}
              style={[styles.Buttoncard2, styles.Buttoncardwidth2]}
            >
              <TextBold style={{ fontSize: 14 }}>More Details</TextBold>
            </TouchableOpacity>
          </View>
        </View> */}
      </View>

      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={styles.topDummy} />
        <View style={[styles.containerbg]}>
          <View>
            <TouchableOpacity
              onPress={onClose}
              style={[styles.cancelButtonContainer, { alignItems: "flex-end" }]}
            >
              <Icon name="cancel" size={30} color={color.neutral[300]} />
            </TouchableOpacity>
            <View style={[styles.flexrow, { alignItems: "center" }]}>
              <View>
                <Image
                  style={[styles.profilepic, { marginTop: 15 }]}
                  source={require("../assets/images/women.png")}
                />
              </View>
              <View>
                <View
                  style={[
                    styles.flexrow,
                    { alignItems: "center", marginBottom: 5 },
                  ]}
                >
                  <TextBold style={[styles.childrenname]}>Samantha </TextBold>
                  <TextBold style={{ color: color.neutral[300] }}>
                    (Son)
                  </TextBold>
                  <Feather
                    name="arrow-up-right"
                    size={16}
                    color={color.secondaryOrange}
                  />
                  <FontAwesome
                    name="bookmark"
                    style={{ marginLeft: 15 }}
                    size={18}
                    color={color.accent}
                  />
                </View>
                <View style={[styles.flexrow, styles.justiffsb]}>
                  <View style={[styles.ratingstarborder]}>
                    <View style={[styles.flexrow]}>
                      <FontAwesome
                        style={[styles.mh5]}
                        name="star"
                        size={14}
                        color={color.primary}
                      />
                      <FontAwesome
                        style={[styles.mh5]}
                        name="star"
                        size={14}
                        color={color.primary}
                      />
                      <FontAwesome
                        style={[styles.mh5]}
                        name="star"
                        size={14}
                        color={color.primary}
                      />
                      <FontAwesome
                        style={[styles.mh5]}
                        name="star"
                        size={14}
                        color={color.primary}
                      />
                      <Feather
                        style={[styles.mh5]}
                        name="star"
                        size={14}
                        color={color.primary}
                      />
                    </View>
                  </View>
                  <View style={[styles.pl10]}>
                    <TextRegular style={{ fontSize: 18 }}>
                      <TextBold>30+</TextBold> Connections
                    </TextRegular>
                  </View>
                </View>
              </View>
            </View>

            <View style={[styles.flexrow, styles.mt8, { flexWrap: "wrap" }]}>
              <View style={[styles.Tags]}>
                <TextRegular>In-House </TextRegular>
              </View>
              <View style={[styles.Tags]}>
                <TextRegular>3-5hrs</TextRegular>
              </View>
              <View style={[styles.Tags]}>
                <TextRegular>Science Project</TextRegular>
              </View>
              <View style={[styles.Tags]}>
                <TextRegular>Feb 17th | Monday</TextRegular>
              </View>
            </View>
            <TextRegular style={[styles.textnetural, { fontSize: 18 }]}>
              Donec vitae mi vulputate, suscipit urna in, malesuada nisl.
              Pellentesque laoreet pretium nislstr... more
            </TextRegular>
            <TextBold style={[styles.Headingtext]}>Address</TextBold>
            <TextRegular style={[styles.textnetural, { fontSize: 18 }]}>
              199 Oakway Lane, Woodland Hills, CA 91303
            </TextRegular>
            {/* <TextRegular style={[styles.textnetural, { fontSize: 18, }]}>CA 91303</TextRegular> */}
            <View
              style={{
                borderBottomWidth: 1,
                borderBottomColor: color.neutral[300],
                marginTop: 5,
              }}
            ></View>
            <TextBold style={[styles.Headingtext, { marginBottom: 5 }]}>
              Requested by
            </TextBold>
            <View style={[styles.flexrow, { alignItems: "flex-start" }]}>
              <View>
                <Image
                  style={[styles.profilepic]}
                  source={require("../assets/images/women.png")}
                />
              </View>
              <View>
                <View style={[styles.flexrow, { alignItems: "center" }]}>
                  <View
                    style={[
                      styles.flexrow,
                      { alignItems: "center", justifyContent: "space-around" },
                    ]}
                  >
                    <View>
                      <View style={[styles.flexrow, { alignItems: "center" }]}>
                        <TextBold style={[styles.childrenname]}>Neha </TextBold>
                        <TextBold style={{ color: color.neutral[300] }}>
                          (Mother)
                        </TextBold>
                        <Feather
                          name="arrow-up-right"
                          size={16}
                          color={color.secondaryOrange}
                        />
                      </View>
                      <View>
                        <TextRegular
                          style={[styles.textnetural, { fontSize: 18 }]}
                        >
                          Architect, TCS
                        </TextRegular>
                      </View>
                    </View>
                    <View
                      style={[
                        styles.flexrow,
                        {
                          justifyContent: "space-between",
                          alignItems: "center",
                        },
                      ]}
                    >
                      <TouchableOpacity
                        onPress={() => navigation.navigate("Chat")}
                        style={{ padding: 5, marginHorizontal: 10 }}
                      >
                        <View>
                          <MaterialIcons
                            name="message"
                            size={20}
                            color={color.neutral[500]}
                          />
                        </View>
                        <View>
                          <TextRegular
                            style={[styles.textnetural, { fontSize: 12 }]}
                          >
                            Chat
                          </TextRegular>
                        </View>
                      </TouchableOpacity>
                      <View style={{ padding: 5, marginHorizontal: 10 }}>
                        <View>
                          <Ionicons
                            name="call"
                            size={20}
                            color={color.neutral[500]}
                          />
                        </View>
                        <View>
                          <TextRegular
                            style={[styles.textnetural, { fontSize: 12 }]}
                          >
                            Call
                          </TextRegular>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View>
                  <View
                    style={[
                      styles.flexrow,
                      { marginTop: 5, alignItems: "center" },
                    ]}
                  >
                    <FontAwesome
                      style={{ marginRight: 10, marginLeft: 3 }}
                      name="map-pin"
                      size={16}
                      color={color.neutral[500]}
                    />
                    <TextRegular style={[styles.textnetural, { fontSize: 16 }]}>
                      591 Joanne Lane, Wilmington, MA 01887
                    </TextRegular>
                  </View>
                  <View
                    style={[
                      styles.flexrow,
                      { marginTop: 5, alignItems: "center" },
                    ]}
                  >
                    <FontAwesome
                      style={{ marginRight: 8 }}
                      name="envelope"
                      size={16}
                      color={color.neutral[500]}
                    />
                    <TextRegular style={[styles.textnetural, { fontSize: 16 }]}>
                      autumnphilips@gmail.com
                    </TextRegular>
                  </View>
                  <View
                    style={[
                      styles.flexrow,
                      { marginTop: 5, alignItems: "center" },
                    ]}
                  >
                    <FontAwesome
                      style={{ marginRight: 8, marginLeft: 2 }}
                      name="building"
                      size={16}
                      color={color.neutral[500]}
                    />
                    <TextRegular style={[styles.textnetural, { fontSize: 16 }]}>
                      Britches of Georgetown
                    </TextRegular>
                  </View>
                </View>
              </View>
            </View>
            <TextRegular
              style={[
                styles.textnetural,
                { fontSize: 18, marginTop: 15, marginBottom: 10 },
              ]}
            >
              4 Tags matches your Interests{" "}
            </TextRegular>
          </View>
        </View>
        <View style={[styles.flexrow, styles.bgyellow, { flexWrap: "wrap" }]}>
          <View style={[styles.Tags2]}>
            <TextRegular>In-House </TextRegular>
          </View>
          <View style={[styles.Tags2]}>
            <TextRegular>3-5hrs</TextRegular>
          </View>
          <View style={[styles.Tags2]}>
            <TextRegular>Science Project</TextRegular>
          </View>
          <View style={[styles.Tags2]}>
            <TextRegular>Project Based</TextRegular>
          </View>
        </View>
        <View style={[styles.containerbg2]}>
          <View style={[styles.modalcontainer]}>
            <View style={[styles.flexrow, { justifyContent: "space-between" }]}>
              <TouchableOpacity
                onPress={onClose}
                style={[styles.Buttoncardinner, styles.Buttoncardwidth]}
              >
                <View style={[styles.flexrow]}>
                  <TextBold style={[styles.btnPrimaryTextsize]}>
                    Modify
                  </TextBold>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onClose}
                style={[styles.Buttoncardinner2, styles.Buttoncardwidth]}
              >
                <View style={[styles.flexrow]}>
                  <TextBold style={[styles.btnPrimaryTextsize]}>
                    Accept
                  </TextBold>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <TextLight
            style={{
              textDecorationLine: "underline",
              textAlign: "center",
              color: color.neutral[500],
            }}
          >
            You have connected previously 3 times.
          </TextLight>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={profileDetails}>
        <View style={styles.topDummy} />
        <ProfileDetails
          name={"Naveen"}
          close={() => setProfileDetails(!profileDetails)}
        />
      </Modal>
      <Modal animationType="slide" transparent={true} visible={kiddetails}>
        <View style={styles.topDummy} />
        <KidsProfileScr2
          name={"Naveen"}
          close={() => setKiddetails(!kiddetails)}
        />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={anotherkiddetails}
      >
        <View style={styles.topDummy} />
        <AnotherKidDetails
          name={"Naveen"}
          close={() => setAnotherkiddetails(!anotherkiddetails)}
        />
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={anotherparentdetails}
      >
        <View style={styles.topDummy}>
          <AnotherParentDetails
            name={"Naveen"}
            close={() => setAnotherparentdetails(!anotherparentdetails)}
          />
        </View>
      </Modal>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  bgyellow: {
    backgroundColor: color.accent,
    padding: 10,
  },
  modalcontainer: {
    paddingHorizontal: 20,
    justifyContent: "center",
    // backgroundColor: color.neutral[100]
  },
  textnetural: {
    color: color.neutral[500],
    marginVertical: 2,
  },
  btnPrimary: {
    padding: 15,
    margin: 2,
    borderWidth: 2,
    borderColor: color.primary,
    // backgroundColor: color.primary,
    borderRadius: 8,
    marginVertical: 10,

  },
  Tags2: {
    backgroundColor: color.white,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 4,
    margin: 4,
  },
  Tags: {
    borderColor: color.accent,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 18,
    paddingHorizontal: 10,
    paddingVertical: 4,
    margin: 4,
  },
  Buttoncard: {
    borderRadius: 8,
    alignSelf: "center",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: color.neutral[100],
    paddingVertical: 18,
  },
  Buttoncard2: {
    borderRadius: 8,
    alignSelf: "center",
    flexDirection: "row",
    textAlign: "center",
    borderWidth: 1.5,
    borderColor: color.primary,
    justifyContent: "center",
    backgroundColor: color.primary,
    paddingVertical: 18,
    marginVertical: 16,
  },
  Buttoncardinner: {
    borderRadius: 8,
    alignSelf: "center",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: color.accent,
    paddingVertical: 16,
    marginVertical: 16,
  },
  Buttoncardinner2: {
    borderRadius: 8,
    alignSelf: "center",
    flexDirection: "row",
    textAlign: "center",
    borderWidth: 1.5,
    borderColor: color.primary,
    justifyContent: "center",
    backgroundColor: color.primary,
    paddingVertical: 16,
    marginVertical: 16,
  },
  Buttoncardwidth: {
    width: "48%",
  },
  Buttoncardfullwidth: {
    width: "100%",
  },
  cancelButtonContainer: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  containerbg2: {
    paddingHorizontal: 15,
    backgroundColor: color.white,
    justifyContent: "center",
    paddingBottom: 10,
  },
  containerbg: {
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
  },
  topDummy: {
    flex: 1,
    // opacity: 0,
    justifyContent: "flex-end",
  },
  btnPrimaryTextsize: {
    fontSize: 16,
  },
  slide: {
    width: screenWidth,
    height: 200,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "skyblue",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  activeprofilr: {
    borderWidth: 3,
    borderColor: color.primary,
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
  dot: {
    alignItems: "center",
    justifyContent: "flex-end",
  },
  arrow: {
    marginLeft: 2,
    marginTop: 3,
  },
  justiffsb: {
    justifyContent: "space-between",
  },
  Buttoncardmoredetails: {
    borderRadius: 8,
    alignSelf: "center",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: color.primary,
    paddingVertical: 16,
  },
  Buttoncard: {
    borderRadius: 8,
    alignSelf: "center",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    borderWidth: 1.5,
    borderColor: color.accent,
    paddingVertical: 16,
    marginVertical: 16,
  },
  Buttoncardnodata: {
    borderRadius: 8,
    alignSelf: "center",
    flexDirection: "row",
    textAlign: "center",
    borderWidth: 1.5,
    borderColor: color.primary,
    justifyContent: "center",
    backgroundColor: color.primary,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  Buttoncard2: {
    borderRadius: 8,
    alignSelf: "center",
    flexDirection: "row",
    textAlign: "center",
    borderWidth: 1.5,
    borderColor: color.primary,
    justifyContent: "center",
    backgroundColor: color.primary,
    paddingVertical: 16,
    marginVertical: 16,
  },
  Buttoncardwidth: {
    width: "48%",
  },
  Buttoncardwidth3: {
    width: "50%",
    marginRight: 10,
  },
  Buttoncardwidth2: {
    width: "38%",
    marginRight: 10,
  },
  childrenname: {
    fontSize: 18,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  profilepic: {
    marginRight: 8,
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: color.primary,
  },
  innercardnodata: {
    backgroundColor: color.neutral[100],
    justifyContent: "space-between",
    padding: 14,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  newinnercard1: {
    // backgroundColor: color.accent,
    justifyContent: "space-between",
    padding: 14,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  innercard1: {
    backgroundColor: color.accent,
    justifyContent: "space-between",
    padding: 14,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  innercard2: {
    justifyContent: "space-between",
    padding: 14,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  flexrow: {
    flexDirection: "row",
  },
  innerbtn1: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: color.primary,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginHorizontal: 5,
  },
  innerbtn: {
    alignItems: "center",
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: color.primary,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  Headingtext: {
    fontSize: 20,
  },
  Cardnodata: {
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: color.neutral[200],
  },
  Card: {
    borderRadius: 10,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
    borderColor: color.accent,
    backgroundColor: color.white,
  },
  container: {
    padding: 15,
    marginBottom: 40,
    justifyContent: "center",
  },
});
