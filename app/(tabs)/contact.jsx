import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'

const background = {
  uri: "https://costacover.com/cdn/shop/articles/header_texture.jpg?v=1672348973"
}



export default function contact() {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <Text style={{fontFamily:"oswald", fontSize:30, textAlign:"center"}}>Contact Us</Text>
        <Text style={{fontFamily:"oswaldReg", fontSize:20, textAlign:"center"}}>Phone: (490)045-5938</Text>
        <Text style={{fontFamily:"oswaldReg", fontSize:20, textAlign:"center"}}>Email: wallsforhomes@walls.com</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:"column",
   
  },
  background:{
    flex:1,
    resizeMode:"cover",
    justifyContent:"center",
  },

})