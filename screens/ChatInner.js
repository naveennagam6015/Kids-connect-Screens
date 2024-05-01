import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  
  View,
  Text
} from "react-native";
import { TextBold, TextMedium, TextRegular } from "../assets/fonts/CustomText";
import { color } from "../assets/colors/theme";
import Search from "../components/Search";
import { FontAwesome } from "@expo/vector-icons";

export default function ChatInner() {
  const navigation = useNavigation();

  return (
    <View>
      <ScrollView>
        <View style={[styles.container]}>
          <Text>Chat Inner Page</Text>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  global: {
    borderWidth: 1,
    borderColor: color.accent,
    padding: 8,
    borderRadius: 8,
  },
  mh5: {
    marginHorizontal: 5,
  },
  mv10: {
    marginVertical: 10,
  },
  justalinecenter: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  jcfs: {
    justifyContent: "flex-start",
  },
  age: {
    fontSize: 14,
  },
  childrenname: {
    fontSize: 18,
  },
  profilepic: {
    marginRight: 12,
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  textnetural: {
    color: color.neutral[500],
    marginVertical: 4,
    fontSize: 14,
  },

  subtext: {
    fontSize: 16,
  },
  Headingtext: {
    fontSize: 20,
    marginVertical: 5,
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
  btnPrimaryTextsize: {
    fontSize: 16,
    // color: color.fontcolor
  },
  justiffsb: {
    justifyContent: "space-between",
  },
  flexrow: {
    flexDirection: "row",
  },
  container: {
    padding: 15,
    marginBottom: 40,
    justifyContent: "center",
  },
});
