import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

import Button from '../../Components/Button'
import Input from '../../Components/Input'

interface LoginProps {
  navigation: NavigationProp<ParamListBase>
}

function Login({ navigation }: LoginProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.spacer} />

      <Input
        title="Email"
        value=""
        placeholder="Type your email"
        onChange={() => {}}
      />
      <Input
        title="Password"
        value=""
        placeholder="Minimum 8 characters"
        onChange={() => {}}
      />

      <View style={styles.spacer} />
      <Button title="Login" onPress={() => {}} />

      <Text
        style={styles.signUpText}
        onPress={() => navigation.navigate('SignUp')}>
        Don't have an account?
        <Text style={styles.signUpDecorated}>Sign up</Text> here
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  spacer: {
    height: 34,
  },
  signUpText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#A0A0A0',
    marginTop: 20,
  },
  signUpDecorated: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
})

export default Login
