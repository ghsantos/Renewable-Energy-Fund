import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { LineGraph } from 'react-native-graph'
import { generateRandomGraphData } from '../utils'

const iconArrowUp = require('../assets/icon_arrow_up.png')
const iconArrowDown = require('../assets/icon_arrow_down.png')

interface FundCardProps {
  title: string
  icon: any
}

export default function FundCard({ title, icon }: FundCardProps): JSX.Element {
  const coinGraphData = generateRandomGraphData(12)

  const price = coinGraphData[coinGraphData.length - 1].value
  const initialPrice = coinGraphData[0].value
  const variation = (price * 100) / initialPrice - 100

  const statusColor = variation < 0 ? '#EE8688' : '#0FDF8F'
  const iconVariation = variation < 0 ? iconArrowDown : iconArrowUp

  return (
    <View style={styles.container}>
      <Image source={icon} />
      <Text style={styles.title}>{title}</Text>

      <LineGraph
        points={coinGraphData}
        color={statusColor}
        animated={true}
        style={styles.graph}
      />

      <View style={styles.valueContainer}>
        <Text style={styles.text}>${price.toFixed(2)}</Text>
        <View style={styles.variationContainer}>
          <Image source={iconVariation} />
          <Text style={[styles.text, { color: statusColor }]}>
            {variation.toFixed(2)}%
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 140,
    height: 146,
    borderColor: '#e6e6e6',
    borderWidth: 1,
    borderRadius: 4,
    marginHorizontal: 8,
    padding: 8,
    justifyContent: 'space-between',
  },
  graph: {
    width: 90,
    height: 48,
  },
  title: {
    fontSize: 12,
    fontWeight: '600',
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
  },
  variationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
})
