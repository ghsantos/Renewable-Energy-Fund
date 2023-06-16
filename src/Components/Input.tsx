import React from 'react'
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'

interface InputProps {
  value: string
  title: string
  placeholder: string
  secureTextEntry?: boolean
  type?: KeyboardTypeOptions
  onChange: (text: string) => void
}

export default function Input({
  value,
  title,
  placeholder,
  type,
  secureTextEntry,
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
        keyboardType={type}
        secureTextEntry={secureTextEntry}
        autoCapitalize={
          secureTextEntry || type === 'email-address' ? 'none' : 'words'
        }
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
