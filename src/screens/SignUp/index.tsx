import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

import Button from '../../Components/Button'
import Input from '../../Components/Input'

interface SignUpProps {
  navigation: NavigationProp<ParamListBase>
}

function SignUp({ navigation }: SignUpProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your account</Text>

      <Input
        title="First Name"
        value="Joe"
        placeholder="Type your first name"
        onChange={() => {}}
      />
      <Input
        title="Last Name"
        value=""
        placeholder="Type your last name"
        onChange={() => {}}
      />
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

      <Text style={styles.agreeTerms}>
        I am over 18 years of age and I have read and agree to the
        <Text style={styles.agreeTermsPrimary}> Terms of Service</Text> and
        <Text style={styles.agreeTermsPrimary}> Privacy policy</Text>.
      </Text>

      <Button title="Create account" onPress={() => navigation.goBack()} />

      <Text style={styles.loginText} onPress={() => navigation.goBack()}>
        Already have an account?
        <Text style={styles.loginDecorated}>Log in Here</Text>
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
    marginBottom: 30,
  },
  agreeTerms: {
    fontSize: 12,
    fontWeight: '400',
    color: '#A0A0A0',
    marginBottom: 30,
  },
  agreeTermsPrimary: {
    color: '#000',
  },
  loginText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#A0A0A0',
    marginTop: 20,
  },
  loginDecorated: {
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
})

export default SignUp
