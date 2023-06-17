import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps {
  title: string
  disabled?: boolean
  secondary?: boolean
  transparent?: boolean
  onPress: Function
}

export default function Button({
  title,
  disabled,
  secondary,
  transparent,
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress()}
      style={[
        styles.button,
        disabled ? styles.disabled : {},
        secondary ? styles.secondary : {},
        transparent ? styles.transparent : {},
      ]}>
      <Text style={[styles.title, transparent ? styles.titleTransparent : {}]}>
        {title}
      </Text>
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
  secondary: {
    height: 48,
    backgroundColor: '#0FDF8F',
  },
  transparent: {
    backgroundColor: 'transparent',
    borderColor: '#CFCFCF',
    borderWidth: 1,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '400',
  },
  titleTransparent: {
    color: '#770FDF',
  },
})
