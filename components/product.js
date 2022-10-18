import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { Image } from 'react-native-elements';
const Product = () => {
    return (
        <View style={styles.product}>
            <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
            />
            <Text>aaaaa</Text>
        </View>
    )
}
export default Product;




const styles = StyleSheet.create({
product: {
    backgroundColor: "#F5F7FA",
    width: 100,
    height: 200,
}
})