import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps {
  title: string
  onPress: Function
}

export default function Button({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.button}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#770FDF',
    height: 52,
    width: '100%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
})
