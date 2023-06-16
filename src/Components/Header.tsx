import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const iconArrowUp = require('../assets/icon_arrow_up.png')
const iconNotification = require('../assets/icon_notification.png')
const iconUser = require('../assets/icon_user.png')

interface HeaderProps {
  accountAmount: number
  portfolioAmount: number
  portfolioVariation: number
}

export default function Header({
  accountAmount,
  portfolioAmount,
  portfolioVariation,
}: HeaderProps): JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Image source={iconUser} />
          <View>
            <Text style={styles.accountAmount}>Account: ${accountAmount}</Text>
          </View>
          <Image source={iconNotification} />
        </View>

        <View>
          <Text style={styles.portfolio}>Portfolio</Text>
          <View style={styles.portfolioContainer}>
            <Text style={styles.portfolioAmount}>${portfolioAmount}</Text>
            <Image source={iconArrowUp} />
            <Text style={styles.portfolioVariation}>{portfolioVariation}%</Text>
          </View>
        </View>
      </View>

      <View style={styles.line} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  accountAmount: {
    fontSize: 14,
    fontWeight: '600',
  },
  portfolio: {
    fontSize: 12,
    fontWeight: '400',
  },
  portfolioContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 4,
  },
  portfolioAmount: {
    fontSize: 24,
    fontWeight: '600',
  },
  portfolioVariation: {
    fontSize: 14,
    fontWeight: '400',
    color: '#0FDF8F',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#F4F4F4',
    marginTop: 30,
    marginBottom: 6,
  },
})
