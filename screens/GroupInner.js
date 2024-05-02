import {
  Image,
  Modal,
  Platform,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import {
  TextBold,
  TextMedium,
  TextLight,
  TextRegular,
} from "../assets/fonts/CustomText";
import { color } from "../assets/colors/theme";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";
import { Feather, FontAwesome6, FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import Search from "../components/Search";
import { LinearGradient } from "expo-linear-gradient";

export default function GroupInner() {
  const navigation = useNavigation();

  const [text, setText] = useState("");
  const Hr = () => {
    return <View style={styles.hr}></View>;
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView  >
        <LinearGradient
          colors={["#FFE78C", "#ededed"]}
          start={[0, 0]}
          end={[0, 1]}
          style={styles.GroupProfilecontainer}
        >
          {/* <View style={styles.GroupProfilecontainer}> */}

          <View style={{ flexDirection: "row" }}>
            <Image
              style={[styles.profilepic]}
              source={require("../assets/images/g1.jpg")}
            />
          </View>
          <View>
            <Text style={{ fontSize: 18 }}>
              Edit{" "}
              <TouchableOpacity>
                <FontAwesome5 name="edit" size={16} color="#000" />
              </TouchableOpacity>
            </Text>
          </View>
          {/* </View> */}
        </LinearGradient>
        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.lables}>Group Name</Text>
            <TextInput
              placeholder="Enter your last name"
              style={styles.inputBox}
              //   value={firstName}
              onChangeText={(e) => {
                setFirstName(e);
                validateFirstName(e, setFirstNameError);
              }}
            />
          </View>
          <View>
            <Text style={styles.lables}>Group Description</Text>
            <TextInput
              style={styles.textArea}
              multiline={true}
              numberOfLines={4} // You can adjust the number of lines you want to display initially
              onChangeText={setText}
              value={text} // Set the value to state variable 'text'
              placeholder="Type something..."
            />
          </View>

          <View style={{ width: "100%" }}>
            <Search />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("ChatInner")} style={styles.btnPrimary}>
            <Text style={{ color: color.fontcolor, textAlign: 'center', fontSize: 18 }}>Create Now</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ChatInner")} style={styles.btnPrimary}>
            <Text style={{ color: color.fontcolor, textAlign: 'center', fontSize: 18 }}>Delete this group</Text>
          </TouchableOpacity>
        </View>


      </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  btnPrimary: {
    padding: 15,
    // marginBottom: 20,
    marginTop: 10,
    backgroundColor: color.primary,
    borderRadius: 8
  },
  memberContainer: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "strech",
    width: "100%",
    height: "20%",
    backgroundColor: "#ededed",
    padding: 10,
  },

  HrView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  GroupMembers: {
    display: "flex",
    flexDirection: "column",
    columnGap: 5,
    padding: 10,
  },
  gMember: {
    height: "40%",
    width: "100%",
    backgroundColor: "#000",
    borderRadius: 15,
    // margin: 3,
  },
  hr: {
    borderBottomColor: "#FFCA01",
    borderBottomWidth: 1,
    marginVertical: 10,
    width: "80%",
    marginBottom: 12,
  },


  lables: {
    marginBottom: 10,
    fontSize: 15,
    fontWeight: "400",
  },
  GroupProfilecontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    // height: "40%",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: "#dedede",
    justifyContent: "center",
    alignItems: "center",
    rowGap: 8,
    padding: 15,
  },
  profilepic: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    padding: 12,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  textArea: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    textAlignVertical: "top",
    minHeight: 100,
    marginBottom: 10,
  },
});
