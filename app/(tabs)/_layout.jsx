import { View, Text } from "react-native";
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from "../../constants/Colors";


import React from "react";


export default function _layout() {
  return (
    <Tabs screenOptions={{

      headerShown: false,
      
      tabBarActiveTintColor: Colors.links,
      
      }}>
      <Tabs.Screen name="home" 
      options={{
        tabBarLabel:"Home",
        tabBarIcon:({ color }) => (
            <Ionicons name="home" size={24} color={color}/>
        )
      }}
      />

      <Tabs.Screen name="products" 
      options={{
        tabBarLabel:"Products",
        tabBarIcon:({ color }) => (
            <Ionicons name="cart" size={24} color={color}/>
        )
      }}/>

      <Tabs.Screen name="contact" 
      options={{
        tabBarLabel:"Contact",
        tabBarIcon:({ color }) => (
            <Ionicons name="call" size={24} color={color}/>
        )
      }}/>
    </Tabs>
  )
}
