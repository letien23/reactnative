import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Banner = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/img/download.jpg')}
      />
      <View style={styles.title}>
        <Text style={styles.title_main}>A Cong - PNV23B</Text>
        <Text style={styles.title_item}>Khong Dong long Khong dau long!!!</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 361,
    height: 203,
    left: 8,
    top: 56,
  },
  logo: {
    width: 360,
    height: 200,
    borderRadius: 20,
  
  },
  title: {
    position: 'absolute',
    width: 200,
    height: 45,
    left: 30,
    top: 50,
  },
  title_main: {
    fontSize: 18,
    color: '#1987FB',
    fontweight: '700',
  },
  title_item: {
    fontweight: 300,
    width: 160,
    top: 10,
    color: 'rgba(9, 15, 71, 0.65)',
    fontSize: 12,
  },
});
export default Banner;