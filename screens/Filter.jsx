import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from './Header'

const Filter = ({navigation}) => {
  return (
    <SafeAreaView style={{marginTop:50}}>
      <View>
          <Header/>
      </View>
    </SafeAreaView>
  )
}

export default Filter