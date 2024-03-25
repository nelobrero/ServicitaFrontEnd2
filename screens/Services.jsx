import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, FlatList, Dimensions, Pressable, TextInput } from 'react-native';
import { sliderImages } from '../constants';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { height } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';

const Services = ({navigation}) => {
    //Data
    const data = [
        {
            id: 1,
            image: require('../assets/services/CateringService.png'),
            screens: "Profile"
        },
        {
            id: 2,
            image: require('../assets/services/CleaningService.png'),
            screens: "Booking"

        },
        {
            id: 3,
            image: require('../assets/services/ElectricService.png'),
            screens: "Profile"

        },
        {
            id: 4,
            image: require('../assets/services/HMupService.png'),
            screens: "Profile"

        },
        {
          id: 5,
          image: require('../assets/services/MassageService.png'),
          screens: "Profile"

      },
      {
        id: 6,
        image: require('../assets/services/MPService.png'),
        screens: "Profile"

    },
    {
      id: 7,
      image: require('../assets/services/PlumbingService.png'),
      screens: "Profile"

  },
  {
    id: 8,
    image: require('../assets/services/SepticService.png'),
    screens: "Profile"

},
{
  id: 9,
  image: require('../assets/services/TutoringService.png'),
  screens: "Profile"

},
        // Add more data objects as needed
    ];

    // Calculate dimensions for two-column layout
    const screenWidth = Dimensions.get('screen').width;
    const itemWidth = (screenWidth) / 2; // 16px margin on each side of the item

    return (
        <SafeAreaView style={{ marginTop: 50 }}>
            <View style={styles.container}>
                <View style={styles.container}>
                    <View style={styles.searchContainer}>
                        <View style={styles.searchBar}>
                            <AntDesign name="search1" size={24} color="#002D62" />
                            <TextInput placeholder="Search for services or more" style={styles.searchInput} />
                        </View>

                        <Pressable onPress={() => navigation.navigate("Filter")}>
                            <Ionicons name="filter" size={24} color="white" style={styles.filter} />
                        </Pressable>
                    </View>
                </View>
            </View>
            <FlatList
                data={data}
                numColumns={2} // Set number of columns to 2
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => navigation.navigate(item.screens)}
                    >
                        {({ pressed }) => (
                            <View style={[styles.flatListContainer, { borderWidth: pressed ? 2 : 0, borderColor: pressed ? 'none' : 'transparent' }]}>
                                <Image
                                    source={item.image}
                                    style={{
                                        width: itemWidth,
                                        height: 260,
                                        alignSelf: 'center',
                                        resizeMode: 'contain',
                                    }}
                                />
                            </View>
                        )}
                    </Pressable>
                )}
                keyExtractor={(item) => item.id.toString()} // Set unique key extractor
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    flatListContainer: {
        marginVertical: 5,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        overflow: 'hidden',
    },
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
        marginHorizontal: 10,
        marginRight: 30,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 5,
        borderColor: '#002147',
        borderRadius: 20,
        backgroundColor: '#F0F0F0',
        marginLeft: 15
    },
    searchInput: {
        flex: 1,
        marginLeft: 8,
    },
    filter: {
        marginLeft: 15
    }
});

export default Services;