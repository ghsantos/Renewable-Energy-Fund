/**
 * Sample React Native App
 *
 * @format
 */

import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import story from './src/story/story'
import Home from './src/screens/Home'
import Login from './src/screens/Login'

const Stack = createNativeStackNavigator()

function App(): JSX.Element {
  return (
    <Provider store={story}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
