import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps {
  title: string
  disabled?: boolean
  onPress: Function
}

export default function Button({ title, disabled, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress()}
      style={[styles.button, disabled ? styles.disabled : {}]}>
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
  disabled: {
    backgroundColor: '#770fdf7a',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
})
