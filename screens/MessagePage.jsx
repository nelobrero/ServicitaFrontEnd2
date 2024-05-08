import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons';
import { messagesData, users } from '../data'; // Ensure that messagesData and users are imported correctly
import { SIZES } from '../constants/theme';

const MessagePage = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(messagesData);

  const handleSearch = (text)=>{
    setSearch(text);

    const filteredData = messagesData.filter((user) =>
    user.fullName.toLowerCase().includes(text.toLowerCase()));

    setFilteredUsers(filteredData)
  }

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Chat", { userName: item.fullName })}
      style={[
        styles.userContainer,
      ]}
    >
      <View style={styles.userImageContainer}>
        {item.isOnline && item.isOnline === true && (
          <View style={[styles.onlineIndicator, { backgroundColor: '#34C800' }]} />
        )}
        <Image
          source={item.userImg}
          resizeMode='cover'
          style={styles.userImage}
        />
      </View>

      <View style={{ flex: 1 }}>
        <View style={styles.userInfoContainer}>
          <Text style={styles.userName}>{item.fullName}</Text>
          <Text style={styles.lastSeen}>{item.lastMessage}</Text>
        </View>

        <View style={{ position: "absolute", right: 4, alignItems: "center" }}>
          <Text style={styles.lastMessageTime}>{item.lastMessageTime}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderContent = () => (
    <View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
  <Text style={{ fontSize: 30, fontWeight: "bold", color: "#07364B" }}>Message...</Text>
  <TouchableOpacity>
    
    <Image 
      source={require("../assets/ailogo.png")}
      resizeMode="contain"
      style={{
        height: 48,
        width: 70,
      }}
    />
  </TouchableOpacity>
</View>

      <View style={styles.searchBar}>
        <TouchableOpacity>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
        <TextInput
          style={styles.searchInput}
          placeholder='Search....'
          value={search}
          onChangeText={handleSearch}
        />
      </View>

      {/* FlatList */}
      <FlatList
        data={filteredUsers}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.area}>
      <StatusBar hidden />
      <View style={styles.container}>
        {renderContent()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: 380,
    height: 50,
    marginVertical: 22,
    paddingHorizontal: 12,
    borderRadius: 12,
    borderWidth: 1
  },
  searchInput: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 12,
    backgroundColor: "white"
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  
  userImageContainer: {
    marginRight: 16,
  },
  onlineIndicator: {
    width: 20,
    height: 20,
    borderRadius: 15,
    backgroundColor: "#90ee90",
    position: "absolute",
    borderWidth:3,
    borderColor: "white", 
    top: 50,
    zIndex: 999,
    right: 0,
  },
  userImage: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  userInfoContainer: {
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
  },
  lastSeen: {
    color: '#999',
  },
  lastMessageTime: {
    color: '#999',
  }
});

export default MessagePage;
