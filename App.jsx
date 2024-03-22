import { StyleSheet, Text, View } from 'react-native';
import { HomePage, ProfilePage, MessagePage, BookingPage } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import Filter from './screens/Filter';
import { createNativeStackNavigator } from '@react-navigation/stack';


const Tab =createBottomTabNavigator()
const screenOptions = {
    tabBarShowLabel:false,
    headerShown:false,
    tabBarStyle:{
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      backgroundColor: "#fff"
    }
}

export default function App() {
  return (
  
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomePage}
          options={{
            tabBarIcon: ({focused})=>{
              return(
                <View style={{alignItems:"center", justifyContent:"center"}}>
                <Entypo name="home" size={30} color={focused ? "#16247d": "#000"}/>
              </View>
              )
            }
          }}
        />

        <Tab.Screen name="Booking" component={BookingPage}
        options={{
          tabBarIcon: ({focused})=>{
            return(
              <View style={{alignItems:"center", justifyContent:"center"}}>
              <Entypo name="calendar" size={30} color={focused ? "#16247d": "#000"} />
            </View>
            )
          }
        }}
        />

        <Tab.Screen name="Message" component={MessagePage}
        options={{
          tabBarIcon: ({focused})=>{
            return(
              <View style={{alignItems:"center", justifyContent:"center"}}>
              <MaterialCommunityIcons name="message-outline" size={30} color={focused ? "#16247d": "#000"} />
            </View>
            )
          }
        }}
        />

        <Tab.Screen name="Profile" component={ProfilePage}
        options={{
          tabBarIcon: ({focused})=>{
            return(
              <View style={{alignItems:"center", justifyContent:"center"}}>
              <MaterialCommunityIcons name="account-outline" size={35} color={focused ? "#16247d": "#000"} />
            </View>
            )
          }
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
