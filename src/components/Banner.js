import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../styles'
const Banner = (props) => {
  return (
    <View style={styles.banner}>
      <Image source={props.img} style={styles.banner__img} />
      <View style={styles.banner__content}>
        <Text numberOfLines={2} ellipsizeMode='tail' style={styles.banner__content__title}>{props.title}</Text>
        <Text numberOfLines={3} ellipsizeMode='tail' style={styles.banner__content__desc}>{props.desc}</Text>
      </View>
    </View>
  )
}

export default Banner