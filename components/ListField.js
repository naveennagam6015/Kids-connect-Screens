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
  const [modalVisible, setModalVisible] = useState(isModalVisible); // Use local state for modal visibility

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
        onPress={() => setModalVisible(true)} // Open modal when the "Add" button is pressed
      >
        <TextRegular style={{ justifyContent: "center" }}>Add</TextRegular>
        <Ionicons name="add-circle-outline" size={20} color="black" />
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
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    width: "100%",
  },
  addButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "10%",
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
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 20,
    borderColor: color.secondaryOrange,
    borderWidth: 1,
    marginRight: 10,
    marginBottom: 10,
  },
  interestsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    width: "80%",
  },
});
