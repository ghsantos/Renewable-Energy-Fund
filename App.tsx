/**
 * Sample React Native App
 *
 * @format
 */

import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import story, { RootState } from './src/story/story'
import AssetDetails from './src/screens/AssetDetails'
import Home from './src/screens/Home'
import Login from './src/screens/Login'
import Portfolio from './src/screens/Portfolio'
import SignUp from './src/screens/SignUp'
import Trade from './src/screens/Trade'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Trade" component={Trade} />
      <Tab.Screen name="Portfolio" component={Portfolio} />
    </Tab.Navigator>
  )
}

function NavigationStack(): JSX.Element {
  const isSignedIn: boolean = useSelector(
    (state: RootState) => state.login.isSignedIn,
  )

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <>
            <Stack.Screen
              name="HomeTabs"
              component={HomeTabs}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="AssetDetails" component={AssetDetails} />
          </>
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
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationStack />
      </GestureHandlerRootView>
    </Provider>
  )
}

export default App
