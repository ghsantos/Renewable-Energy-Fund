import React from 'react'
import { ScrollView, StyleSheet, Text } from 'react-native'

function Home(): JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <Text>Portfolio</Text>
      <Text style={{ fontSize: 18, fontWeight: '600' }}>Funds</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
})

export default Home
