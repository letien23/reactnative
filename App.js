// import React, { useState } from 'react';
// import { StyleSheet, Text, View,Image,ImageBackground, TouchableOpacity, } from 'react-native';


// function App() {
//   return ( <View>
//     <Product/>
//     <ImageBackground
//         style={styles.stretch}
//         source={require('./images/banner.png')}
//       />
//     <Text>aaa</Text>
//   </View> );
// }

// export default App;
// const Product = () => {
//   return (
//       <View style={styles.product}>
//           <Text>aaaaa</Text>
//       </View>
//   )
// }


// const styles = StyleSheet.create({
//   product: {
//       backgroundColor: "skyblue",
//       width: 100,
//       height: 200,
//   }
// })

import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const App = () => (
  <View style={styles.container}>
    <View style={styles.banner}>
      <ImageBackground source={require('./images/banner.png')} resizeMode="cover" style={styles.image}>

        <View style={styles.banner_title}>
          <Text style={styles.text_title}>Save extra on every order</Text>
          <Text style={styles.bottom_title}>Etiam mollis metus non faucibus sollicitudin.</Text>
        </View>
      </ImageBackground>
    </View>

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    margin: 20,
    marginRight: 20,
    width: '90%',
    height: 200,
  },
  banner_title: {
    padding: 25,
    width: "90%",
    height: "100%"
  },
  image: {
    borderRadius: 5,
    flex: 1,
  },
  bottom_title: {
    paddingTop: 15,
    fontSize: 18,

  }
  ,
  text_title: {
    width: '50%',
    color: "#1987FB",
    fontSize: 23,
    lineHeight: 25,
    fontWeight: "bold",
  }
});

export default App;