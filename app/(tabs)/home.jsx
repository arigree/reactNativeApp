import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import { Link } from "expo-router";

const image = {
  uri: "https://i.etsystatic.com/40725696/r/il/4882e7/4705247420/il_fullxfull.4705247420_6qbb.jpg",
};

export default function home() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text
          style={{
            fontFamily: "oswald",
            fontSize: 50,
            color: "white",
            textAlign: "center",
          }}
        >
          Wall Store
        </Text>
        <Link
          href="/products"
          style={{
            backgroundColor: "#fff",
            width: "100%",
            fontFamily: "oswald",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Shop Now
        </Link>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  shopButton: {
    backgroundColor: "#fff",
    width: 300,
    textAlign: "center",
  },
});
