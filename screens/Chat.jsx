import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import { Bubble } from "react-native-gifted-chat";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Chat = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleInputText = (text) => {
    setInputMessage(text);
  };

  const renderMessage = (props) => {
    const { currentMessage } = props;

    if (currentMessage.user._id === 1) {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
          }}
        >
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: "blue",
                marginRight: 12,
                marginVertical: 12,
              },
            }}
            textStyle={{
              right: {
                color: "white",
              },
            }}
          />
        </View>
      );
    }
  };

  const submitHandler = () => {
    const message = {
      _id: Math.random().toString(36).toString(7),
      text: inputMessage,
      createdAt: new Date().getTime(),
      user: { _id: 1 },
    };

    setMessages((previousMessage) =>
      GiftedChat.append(previousMessage, [message])
    );

    setInputMessage("");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 16,
          backgroundColor: "white",
          borderBottomColor: "gray",
          borderBottomWidth: 0.2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginHorizontal: 12 }}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <View>
            <View
              style={{
                position: "absolute",
                bottom: 0,
                right: 4, // Corrected the spelling of "right"
                width: 10,
                height: 10, // Corrected the spelling of "height"
                borderRadius: 5,
                backgroundColor: "blue",
                zIndex: 999,
                borderWidth: 2, // Corrected the repeated declaration
                borderColor: "white",
              }}
            />
            <Image
              source={require("../assets/images/user1.jpeg")}
              resizeMode="contain"
              style={{
                height: 48, // Corrected the spelling of "height"
                width: 48,
                borderRadius: 24, // Adjusted the borderRadius to half the width/height to make it a circle
              }}
            />
          </View>
          <View style={{ marginLeft: 16 }}>
            <Text
              style={{
                fontSize: 16,
                color: "black",
              }}
            >
              Carl Asoy
            </Text>
            <Text
              style={{
                fontSize: 12,
                // fontFamily: "regular",
                color: "blue",
              }}
            >
              Online
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              marginHorizontal: 16,
            }}
          >
            <Feather name="video" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      <GiftedChat
        messages={messages}
        renderInputToolbar={() => {
          return null;
        }}
        user={{ _id: 1 }}
        minInputToolbarHeight={0}
        renderMessage={renderMessage}
      />

      <View style={styles.inputContainer}>
        <View style={styles.inputMessageContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type here..."
            value={inputMessage}
            onChangeText={handleInputText}
            // placeholderTextColor={black}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                marginHorizontal: 8,
              }}
            >
              <Ionicons name="images-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={submitHandler}>
            <Feather name="send" size={24} color="black" marginRight={10} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "white",
    height: 72,
    alignItems: "center",
    justifyContent: "center",
  },
  inputMessageContainer: {
    height: 54,
    width: 380,
    flexDirection: "row",
    justifyContent: "center",
    borderWidth: 1,
    // backgroundColor: "blue",
    borderRadius: 16,
    alignItems: "center",
    borderColor: "blue",
    marginBottom: 130,
  },
  input: {
    color: "black",
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default Chat;
