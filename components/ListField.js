import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Modal,
  StyleSheet,
  Text,
  Alert,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import { TextBold, TextRegular } from "../assets/fonts/CustomText";
import { color } from "../assets/colors/theme";

export default function ListField({ onChangeInterest, newInterest, isModalVisible, interests, removeInterest, AddInterest }) {
  const [modalVisible, setModalVisible] = useState(isModalVisible);

  return (
    <View style={styles.container}>
      <View style={styles.interestsContainer}>
        {interests.map((interest, index) => (
          <TouchableOpacity style={styles.textContainer} key={index} onPress={() => removeInterest(index)}>
            <TextRegular>{interest}</TextRegular>
            <Entypo name="cross" size={20} color="black" />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <TextRegular style={{ justifyContent: "center", fontSize: 16, marginRight: 4 }}>Add</TextRegular>
        <Ionicons name="add-circle" size={20} color={color.accent} />
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.inputBox}
              placeholder="Type interest here"
              onChangeText={onChangeInterest}
              value={newInterest}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)} // Close modal
              >
                <TextBold style={{ alignSelf: "center" }}>Close</TextBold>
              </TouchableOpacity>
              <TouchableOpacity style={styles.addBtn} onPress={() => { AddInterest(); setModalVisible(false); }}>
                <TextBold style={{ alignSelf: "center" }}>Add</TextBold>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#CCCCCC",
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 12,
    width: "100%",
  },
  addButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    padding: 10,
    width: "100%",
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  closeButton: {
    backgroundColor: color.secondaryOrange,
    padding: 15,
    borderRadius: 10,
  },
  addBtn: {
    backgroundColor: color.primary,
    padding: 15,
    borderRadius: 10,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: color.secondaryOrange,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  interestsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    width: "80%",

  },
});
