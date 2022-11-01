import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles';

const Title = (props) => {
  return (
      <Text style={styles.title} >{props.title}</Text>
  )
}
export default Title;