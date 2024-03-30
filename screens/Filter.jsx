import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View, Text, TextInput, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { SelectList } from 'react-native-dropdown-select-list';


const data1 = [
    {key: '1', value:'Manicure/Pedicure Service'},
    {key: '2', value:'Hair and Makeup Service'},
    {key: '3', value:'Septic Tank Service'},
    {key: '4', value:'Home Cleaner Service'},
    {key: '5', value:'Massage Service'},
    {key: '6', value:'Plumbing Services'},
    {key: '7', value:'Electrical Services'},
    {key: '8', value:'Tutoring Services'},
    {key: '9', value:'Catering Services'},
];

const data2 = [
  {key: '1', value:'Cebu City'},
  {key: '2', value:'Talisay City'},
  {key: '3', value:'Banawa'},
  {key: '4', value:'Minglanilla'},
  {key: '5', value:'Mandaue City'},
  {key: '6', value:'Liloan City'},
  {key: '7', value:'Lahug'},
  {key: '8', value:'Naga City'},
  {key: '9', value:'Westeros'},
];

export default function Filter() {

  const [text, setText] = useState('10000000 Php');

    const onChangeText = (value) => {
        setText(value);
    };

    const [text2, setText2] = useState('5');

    const onChangeText2 = (value) => {
        setText2(value);
    };

    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [selected, setSelected] = useState("");

    const showDatepicker = () => {
        setShowDatePicker(true);
        setShowTimePicker(false);
    };

    const showTimepicker = () => {
        setShowTimePicker(true);
        setShowDatePicker(false);
    };

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setShowTimePicker(false);
        setDate(currentDate);
    };

    return (
        <View style={styles.container1}>
            <View style={styles.container}>
                <View style={styles.searchContainer}>
                    <View style={styles.searchBar}>
                        <AntDesign name="search1" size={24} color="#002D62" />
                        <TextInput placeholder="Search for services or more" style={styles.searchInput} />
                    </View>

                    <Pressable onPress={Filter}>
                        <Ionicons name="filter" size={24} color="white" style={styles.filter} />
                    </Pressable>
                </View>
            </View>

          <View>
          <Text style={{ margin: 30, fontWeight:"bold", fontSize: 50, color: "#002F45"}}>Search Filter</Text>
          </View>
            {/* SelectList component */}
            <View style={{marginTop: 30, width: 400}}>
              <Text style={{fontWeight:"bold", fontSize: 20, color: "#002F45"}}>Type of Service</Text>
            <SelectList 
            data={data1} 
            setSelected={setSelected}
            style={{
            backgroundColor: "black",
            color: "white",
            placeholder: "Select state",
            }}
            />
            </View>

            <View style={{marginTop: 30, width: 400}}>
              <Text style={{fontWeight:"bold", fontSize: 20, color: "#002F45"}}>Location</Text>
            <SelectList 
            data={data2} 
            setSelected={setSelected}
            style={{
            backgroundColor: "black",
            color: "white",
            placeholder: "Select state",
            }}
            />
            </View>

            <View style={styles.container2}>
            <Text style={{fontWeight:"bold", fontSize: 20, color: "#002F45"}}>Price Range</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Price"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>

        <View style={styles.container2}>
            <Text style={{fontWeight:"bold", fontSize: 20, color: "#002F45"}}>Ratings</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText2}
                value={text2}
                placeholder="Price"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>

            <View style={{marginTop: 30, flexDirection:"row", justifyContent:"space-between", paddingHorizontal: 20}}>
                <View style={styles.buttonContainer1}>
                    <Button onPress={showDatepicker} title="Select Date" color="#07364B"/>
                    {showDatePicker && (
                        <DateTimePicker
                            testID="datePicker"
                            value={date}
                            mode="date"
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>

                <View style={styles.buttonContainer1}>
                    <Button onPress={showTimepicker} title="Select Time"  color="#07364B" />
                    {showTimePicker && (
                        <DateTimePicker
                            testID="timePicker"
                            value={date}
                            mode="time"
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>
            </View>

            <Text style={{fontSize: 20}}>{date.toLocaleString()}</Text>
            <StatusBar style="auto" />

            <View style={styles.buttonContainer}>
            <Button
            title="Search"
            filled
            color="#002F45"
            style={{
                marginTop: 400,
                marginBottom: 4,
                color: "#002F45"
            }}
            />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container1: {
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonContainer: {
      marginTop: 20,
      marginBottom: 4,
      width: 200, // Adjust the width as needed
  },
  buttonContainer1: {
    marginTop: 10,
    margin: 10,
    borderRadius: 10,
    height: 80,
    width: 150, // Adjust the width as needed
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
    Button: {
        backgroundColor: '#002147',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    container2: {
      margin: 20,
  },
  input: {
      height: 50,
      width: 400, // Adjust the width as needed
      borderWidth: 1,
      borderColor: '#002147',
      borderRadius: 10,
      paddingHorizontal: 10,
      fontSize: 16
  },
});
