import { StyleSheet, Text, View } from 'react-native';
import { HomePage, ProfilePage, MessagePage, BookingPage, Header, Filter, Services, ChooseLocation, Chat } from './screens';
import PopularServices from './screens/PopularServices';
import {Cleaning} from './screens'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

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



const HomeScreenWithStackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName='HomePage' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='HomePage' component={HomePage} />
      <Stack.Screen name='Filter' component={Filter} />
      <Stack.Screen name='Services' component={Services} />
      <Stack.Screen name='Cleaning' component={Cleaning} />
      <Stack.Screen name='PopularServices' component={PopularServices} />
      <Stack.Screen name='ChooseLocation' component={ChooseLocation} />
      <Stack.Screen name='Chat' component={Chat} />


    </Stack.Navigator>
  );
};


  


export default function App() {

  LogBox.ignoreAllLogs();

  return (
  
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomeScreenWithStackNav}
          options={{
            tabBarIcon: ({focused})=>{
              return(
                <View style={{alignItems:"center", justifyContent:"center"}}>
                <Entypo name="home" size={24} color={focused ? "#0071A5": "#07364B"}/>
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
              <Entypo name="calendar" size={24} color={focused ? "#0071A5": "#07364B"} />
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
              <MaterialCommunityIcons name="message-outline" size={24} color={focused ? "#0071A5": "#07364B"} />
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
              <MaterialCommunityIcons name="account-outline" size={24} color={focused ? "#0071A5": "#07364B"} />
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

  icon:{
    color:'#0071A5'
  }
});
