import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationProp, ParamListBase } from '@react-navigation/native'
import CheckBox from '@react-native-community/checkbox'

import useInput, {
  emailValidation,
  passwordValidation,
  nameValidation,
} from '../../hooks/useInput'
import Button from '../../Components/Button'
import Input from '../../Components/Input'

interface SignUpProps {
  navigation: NavigationProp<ParamListBase>
}

function SignUp({ navigation }: SignUpProps): JSX.Element {
  const firstName = useInput('', nameValidation)
  const lastName = useInput('', nameValidation)
  const email = useInput('', emailValidation)
  const password = useInput('', passwordValidation)

  const [agreeTerms, setAgreeTerms] = useState(false)

  const buttonEnable =
    agreeTerms &&
    firstName.isValid &&
    lastName.isValid &&
    email.isValid &&
    password.isValid

  useEffect(() => {
    navigation.setOptions({ title: '' })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your account</Text>

      <Input
        title="First Name"
        value={firstName.value}
        placeholder="Type your first name"
        onChange={firstName.onChange}
      />
      <Input
        title="Last Name"
        value={lastName.value}
        placeholder="Type your last name"
        onChange={lastName.onChange}
      />
      <Input
        title="Email"
        value={email.value}
        placeholder="Type your email"
        type="email-address"
        onChange={email.onChange}
      />
      <Input
        title="Password"
        value={password.value}
        placeholder="Minimum 8 characters"
        secureTextEntry
        onChange={password.onChange}
      />

      <View style={styles.agreeTermsContainer}>
        <CheckBox
          disabled={false}
          value={agreeTerms}
          onValueChange={newValue => setAgreeTerms(newValue)}
        />
        <Text style={styles.agreeTerms}>
          I am over 18 years of age and I have read and agree to the
          <Text style={styles.agreeTermsPrimary}> Terms of Service</Text> and
          <Text style={styles.agreeTermsPrimary}> Privacy policy</Text>.
        </Text>
      </View>

      <Button
        disabled={!buttonEnable}
        title="Create account"
        onPress={() => navigation.goBack()}
      />

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
  agreeTermsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  agreeTerms: {
    fontSize: 12,
    fontWeight: '400',
    color: '#A0A0A0',
    flex: 1,
    paddingLeft: 12,
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
