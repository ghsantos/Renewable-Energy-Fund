import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { GraphPoint } from '../utils'

const GRAPH_WIDTH = Dimensions.get('window').width

interface AxisLabelProps {
  text: string
  position: number
}

const AxisLabel = ({ text = '', position }: AxisLabelProps) => {
  return (
    <View
      style={[
        styles.container,
        {
          transform: [{ translateX: Math.max(position - 32, 5) }],
        },
      ]}>
      <Text style={styles.text}>${text}</Text>
    </View>
  )
}

interface TopAxisLabelProps {
  points: GraphPoint[]
}

export const TopAxisLabel = ({ points }: TopAxisLabelProps) => {
  const max = points.reduce(
    (a, b, i) => (a[0].value < b.value ? [b, i] : a),
    [{ value: Number.MIN_VALUE }, -1],
  )
  const x = (max[1] / points.length) * GRAPH_WIDTH || 0

  return <AxisLabel text={max[0].value.toFixed(2)} position={x} />
}

interface BottomAxisLabelProps {
  points: GraphPoint[]
}

export const BottomAxisLabel = ({ points }: BottomAxisLabelProps) => {
  const min = points.reduce(
    (a, b, i) => (a[0].value > b.value ? [b, i] : a),
    [{ value: Number.MAX_VALUE }, -1],
  )
  const x = (min[1] / points.length) * GRAPH_WIDTH || 0

  return <AxisLabel text={min[0].value.toFixed(2)} position={x} />
}

const styles = StyleSheet.create({
  container: {
    width: 50,
  },
  text: {
    fontSize: 12,
    color: '#A0A0A0',
  },
})
