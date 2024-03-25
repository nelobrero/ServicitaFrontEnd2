import { View, Text, Image, TextInput, SafeAreaView, TouchableOpacity, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import ImageSlider from "../components/ImageSlider";
// import Header from './Header';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import PopularServices from './PopularServices';

const HomePage = ({navigation}) => {
  return (
    <SafeAreaView style={{marginTop:50}}>
      
      {/* Header */}

    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <AntDesign name="search1" size={24} color="#002D62" />
          <TextInput placeholder="Search for services or more" style={styles.searchInput} />
        </View>

        <Pressable onPress={()=>navigation.navigate("Filter")}>
        <Ionicons name="filter" size={24} color="white" style={styles.filter} />
        </Pressable>
      </View>
    </View>


    {/* IMAGE SLIDER */}
      <View style={{marginTop:15}}>
        <ImageSlider />
        
      
    {/* Categories */}
<View>
<View style={styles.container1}>
  <View>
    <Text style={styles.categoriesText}>Services</Text>
  </View> 

  <View>
  <TouchableOpacity
  onPress={()=>navigation.navigate("Services")}>
      <Text style={styles.viewAllText}>View All</Text>
    </TouchableOpacity>
  </View> 
</View>
<View  style={{flexDirection: "row", alignItems: "center", justifyContent:"center", flexWrap:'wrap' }}>

{/* Cleaning Service */}
<View>
<TouchableOpacity
  onPress={()=>navigation.navigate("Cleaning")}>
  <Image 
    source={require("../assets/Cleaning.png")}
    style={{
      height: 100,
      width: 93,
      resizeMode:'contain',
      marginRight: 2,
      marginLeft: 2
    }}
  />
</TouchableOpacity>
</View>

{/* Second Image */}
<View>

  <Image
    source={require("../assets/Manicure.png")}
    style={{
      height: 100,
      width: 93,
      resizeMode:'contain',
      marginRight: 2,
      marginLeft: 2
    }}
  />
</View>

{/* Third Image */}
<View>
  <Image
    source={require("../assets/Electric.png")}
    style={{
      height: 100,
      width: 93,
      resizeMode:'contain',
      marginRight: 2,
      marginLeft: 2
    }}
  />
</View>

{/* Fourth Image */}
<View>
  
  <Image
    source={require("../assets/Beauty.png")}
    style={{
      height: 100,
      width: 93,
      resizeMode:'contain',
      marginRight: 2,
      marginLeft: 2
    }}
  />
</View>
</View>
</View>

  
{/* POPULAR SERVICES LIST */}
    <View>
      <View style={{
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10}}>
    <Text style={{color: 'black',
    fontSize: 15,
    fontWeight:'bold'
    }}>Popular Services</Text>
    </View> 
        
    </View>
    <View> 
      <PopularServices/>
    </View>
    </View>
    </SafeAreaView>
   
  )
}


const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#07364B',
    alignItems: 'center'
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    marginHorizontal: 10, // Adjust horizontal margin to change space between search bar and filter icon
    marginRight: 30,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: 8, // Adjust vertical padding to change height
    paddingHorizontal: 5,
    borderColor: '#002147',
    borderRadius: 20,
    backgroundColor: '#F0F0F0',
    marginLeft: 15
  },
  searchInput: {
    flex: 1, // Take remaining space within the searchBar
    marginLeft: 8, // Adjust left margin to create space between icon and input
  },

  filter: {
    marginLeft:15
  },

  container1: {
    flexDirection: 'row',
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between', // Align items with space between them
    marginTop: 10,
    marginRight:20,
    marginLeft: 20,
    marginBottom: 10
  },
 
  viewAllText: {
    color: 'black',
    fontSize: 15,
    fontWeight:'bold'
  },

  categoriesText: {
    color: 'black',
    fontSize: 15,
    fontWeight:"bold"
  }
});

export default HomePage
 
  