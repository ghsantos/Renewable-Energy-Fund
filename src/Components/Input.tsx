import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

interface InputProps {
  value: string
  title: string
  placeholder: string
  onChange: (text: string) => void
}

export default function Input({
  value,
  title,
  placeholder,
  onChange,
}: InputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChange}
        style={styles.input}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
  },
  title: {
    color: '#A0A0A0',
    fontSize: 11,
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#F4F4F4',
    borderRadius: 4,
    height: 48,
    paddingHorizontal: 10,
    marginTop: 5,
  },
})
