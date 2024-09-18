import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'

const background = {
  uri: "https://costacover.com/cdn/shop/articles/header_texture.jpg?v=1672348973"
}



export default function products() {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
      <Image style={styles.images} source={require("../../assets/images/wall1.jpg")}></Image>
      <Image style={styles.images} source={require("../../assets/images/wall2.jpg")}></Image>
      <Image style={styles.images} source={require("../../assets/images/wall3.jpg")}></Image>
      <Image style={styles.images} source={require("../../assets/images/wall4.jpg")}></Image>
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
  images:{
    width:'90%',
    height:180,
    
    marginLeft:20,
    marginRight:20,
    marginTop:15
  }
})