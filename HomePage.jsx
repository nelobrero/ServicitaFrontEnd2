import { View, Text, Image, TextInput, ScrollView, SafeAreaView, TouchableOpacity, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import ImageSlider from "../components/ImageSlider";
// import Header from './Header';
import Categories from './HomeScreen/Categories';
import FeaturedRow from './HomeScreen/FeaturedRow';
import { featured, featured2, featured3 } from '../constants';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const HomePage = ({navigation}) => {
  return (
    <ScrollView>
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
   <Pressable>
    <Categories/>
    </Pressable>

    {/* featured */}
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
      {
        [featured, featured2, featured3].map((item, index)=>{
          return (
            
            <FeaturedRow
                data={featured}
                key={index}
                title={item.title}
                restaurants={item.restaurants}
                description={item.description}
            />
          )
        })
      }
    </View>
    <View>
      <Text style={{fontSize:50}}>blank</Text>
    </View>
    </View>
    </SafeAreaView>
    </ScrollView>
   
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
  }
});

export default HomePage
 
  