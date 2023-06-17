import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface StatItemProps {
  title: string
  value: string
}

function StatItem({ title, value }: StatItemProps): JSX.Element {
  return (
    <View style={styles.statItemContainer}>
      <Text style={styles.statTitle}>{title}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  )
}

export default function InfoStats(): JSX.Element {
  return (
    <View>
      <Text style={styles.title}>Info & Stats</Text>

      <View style={styles.container}>
        <View style={styles.statsContainer}>
          <StatItem title="AUM" value="$430.88m" />
          <StatItem title="Vintage Range" value="2019 - 2022" />
          <StatItem title="Price at Close" value="$17.68" />
        </View>
        <View style={styles.statsContainer}>
          <StatItem title="Issue Date" value="18/04/2022" />
          <StatItem title="TER" value="0.15%" />
          <StatItem title="Price at Open" value="$17.74" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 12,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  statsContainer: {
    flex: 1,
  },
  statItemContainer: {
    marginVertical: 6,
  },
  statTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#A0A0A0',
  },
  statValue: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 6,
  },
})
