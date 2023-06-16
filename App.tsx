/**
 * Sample React Native App
 *
 * @format
 */

import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import story, { RootState } from './src/story/story'
import Home from './src/screens/Home'
import Login from './src/screens/Login'
import SignUp from './src/screens/SignUp'

const Stack = createNativeStackNavigator()

function NavigationStack(): JSX.Element {
  const isSignedIn: boolean = useSelector(
    (state: RootState) => state.login.isSignedIn,
  )

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function App(): JSX.Element {
  return (
    <Provider store={story}>
      <NavigationStack />
    </Provider>
  )
}

export default App
