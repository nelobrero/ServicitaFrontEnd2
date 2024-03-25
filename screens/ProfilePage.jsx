import { View, Text, Image} from 'react-native'
import React from 'react'

const ProfilePage = () => {
  return (
    <View>
      <Text>FACE BITCH!</Text>
      <View>
        <View>
            <Text>BITCH</Text>
            <Image source={require("../assets/Profile.png")}
                style={{width:100,
                height:100} }/>
        </View>
    </View>
    </View>
  )
}

export default ProfilePage