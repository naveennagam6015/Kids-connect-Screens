import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Animated,
} from "react-native";
import { color } from "../assets/colors/theme";
import { FontAwesome } from "@expo/vector-icons";

export default function ChatInner() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [containerVisible, setContainerVisible] = useState(false);
  const slideUpValue = new Animated.Value(0);

  const sendMessage = () => {
    if (messageInput.trim() !== "") {
      setMessages([...messages, messageInput.trim()]);
      setMessageInput("");
    }
  };

  const slideUp = () => {
    setContainerVisible(true);
    Animated.timing(slideUpValue, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const slideDown = () => {
    Animated.timing(slideUpValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => setContainerVisible(false));
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.chatContainer}
        ref={(ref) => {
          this.scrollView = ref;
        }}
        onContentSizeChange={() =>
          this.scrollView.scrollToEnd({ animated: true })
        }
      >
        <View
          style={{ maxWidth: "80%", alignSelf: "flex-end", marginBottom: 5 }}
        >
          <View style={styles.senderView}>
            <Text style={styles.senderName}>~ Vishal</Text>
          </View>
          <View style={[styles.messageContainer]}>
            <Text style={styles.message}>Hi</Text>
          </View>
          <View style={styles.senderView}>
            <Text style={styles.senderTime}>10:12 PM</Text>
          </View>
        </View>
        <View
          style={{ maxWidth: "80%", alignSelf: "flex-end", marginBottom: 5 }}
        >
          <View style={styles.senderView}>
            <Text style={styles.senderName}>~ Vishal</Text>
          </View>
          <View style={[styles.messageContainer]}>
            <Text style={styles.message}>Wish you happy birthday sasi</Text>
          </View>
          <View style={styles.senderView}>
            <Text style={styles.senderTime}>10:12 PM</Text>
          </View>
        </View>
        <View
          style={{ maxWidth: "80%", alignSelf: "flex-start", marginBottom: 5 }}
        >
          <View style={styles.reciverView}>
            <Text style={styles.reciverName}>~ Sasi Vardhan Vennupusa</Text>
          </View>
          <View style={[styles.reciverMessageContainer]}>
            <Text style={styles.message}>Thank you vishal</Text>
          </View>
          <View style={styles.reciverView}>
            <Text style={styles.senderTime}>10:13 PM</Text>
          </View>
        </View>
        <View
          style={{ maxWidth: "80%", alignSelf: "flex-start", marginBottom: 5 }}
        >
          <View style={styles.reciverView}>
            <Text style={styles.reciverName}>~ Soumya Ranjan</Text>
          </View>
          <View style={[styles.reciverMessageContainer]}>
            <Text style={styles.message}>Hey, Sasi Happy bday what the fuck sasi</Text>
          </View>
          <View style={styles.reciverView}>
            <Text style={styles.senderTime}>10:23 PM</Text>
          </View>
        </View>
        {messages.map((message, index) => (
          <View
            key={index}
            style={{ maxWidth: "80%", alignSelf: "flex-end", marginBottom: 5 }}
          >
            <View
              style={[
                styles.messageContainer,
                { width: message.length > 10 ? "80%" : "auto" },
              ]}
            >
              <Text style={styles.message}>{message}</Text>
            </View>
            <View style={styles.senderView}>
              <Text style={styles.senderName}>Vishal</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.cameraButton} onPress={slideUp}>
          <FontAwesome name="camera" size={24} color="white" />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          multiline={true}
          value={messageInput}
          onChangeText={(text) => setMessageInput(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <FontAwesome name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {containerVisible && (
        <Animated.View
          style={[
            styles.cameraContainer,
            {
              transform: [
                {
                  translateY: slideUpValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [300, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <TouchableOpacity style={styles.cameraOption}>
            <Text>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cameraOption}>
            <Text>Choose from Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cameraOption} onPress={slideDown}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
  },
  chatContainer: {
    flexGrow: 1,
    padding: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  cameraButton: {
    backgroundColor: "blue",
    borderRadius: 20,
    padding: 10,
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "blue",
    borderRadius: 20,
    padding: 10,
  },
  cameraContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    padding: 10,
  },
  cameraOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  messageContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    maxWidth: "auto",
  },
  reciverMessageContainer: {
    backgroundColor: "#d6dbdb",
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    maxWidth: "auto",
  },
  senderView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  reciverView: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  senderName: {
    margin: 0,
    fontSize: 10,
    color: "#5e95ff",
    fontWeight: "bold",
    // justifyContent: "center",
    // alignItems: "flex-end"
  },
  reciverName: {
    margin: 0,
    fontSize: 10,
    color: "#8186",
    fontWeight: "bold",
    // justifyContent: "center",
    // alignItems: "flex-end"
  },
  senderTime: {
    margin: 0,
    fontSize: 10,
    color: "#000",
    // fontWeight:"bold",
    // justifyContent: "center",
    // alignItems: "flex-end"
  },
  message: {
    fontSize: 16,
    // alignItems: "flex-end"
  },
});
