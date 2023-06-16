import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import Header from '../../Components/Header'

function Portfolio(): JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <Header
        accountAmount={1345.23}
        portfolioAmount={1245.32}
        portfolioVariation={31.2}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
})

export default Portfolio
