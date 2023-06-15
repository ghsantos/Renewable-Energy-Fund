import React from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native'

function Home(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#fff',
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Text>Portfolio</Text>
        <Text>Funds</Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
