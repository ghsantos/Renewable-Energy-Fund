import React from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import type { SkiaMutableValue } from '@shopify/react-native-skia'
import {
  Canvas,
  Easing,
  Group,
  LinearGradient,
  RoundedRect,
  runTiming,
  useComputedValue,
  vec,
  mix,
} from '@shopify/react-native-skia'

export interface Graph {
  label: string
  value: number
}
export type Graphs = Graph[]

const buttonWidth = 38
const buttonTransitionSize = 53
const buttonOffset = 9

const graphs = [
  {
    label: '1h',
    value: 0,
  },
  {
    label: '1d',
    value: 1,
  },
  {
    label: '1s',
    value: 2,
  },
  {
    label: '1m',
    value: 3,
  },
  {
    label: '1y',
    value: 4,
  },
  {
    label: 'All',
    value: 4,
  },
]

export interface GraphState {
  next: number
  current: number
}

interface SelectionProps {
  state: SkiaMutableValue<GraphState>
  transition: SkiaMutableValue<number>
  onPressItem: Function
}

const getDuration = (current: number, next: number) => {
  return 300 + 80 * Math.abs(current - next)
}

export const Selection = ({
  state,
  transition,
  onPressItem,
}: SelectionProps) => {
  const transform = useComputedValue(() => {
    const { current, next } = state.current
    return [
      {
        translateX: mix(
          transition.current,
          current * buttonTransitionSize + buttonOffset,
          next * buttonTransitionSize + buttonOffset,
        ),
      },
    ]
  }, [state, transition])

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Canvas style={StyleSheet.absoluteFill}>
          <Group transform={transform}>
            <RoundedRect
              x={0}
              y={0}
              height={buttonWidth}
              width={buttonWidth}
              r={4}>
              <LinearGradient
                colors={['#F7EFFF']}
                start={vec(0, 0)}
                end={vec(buttonWidth, 38)}
              />
            </RoundedRect>
          </Group>
        </Canvas>

        {graphs.map((graph, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => {
              onPressItem(graph)

              state.current.current = state.current.next
              state.current.next = index
              transition.current = 0
              runTiming(transition, 1, {
                duration: getDuration(
                  state.current.current,
                  state.current.next,
                ),
                easing: Easing.inOut(Easing.cubic),
              })
            }}>
            <View style={styles.button}>
              <Text
                style={[
                  styles.label,
                  state.current.next === index ? styles.labelSelected : {},
                ]}>
                {graph.label}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    paddingTop: 12,
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    width: 320,
    justifyContent: 'space-around',
  },
  button: {
    height: buttonWidth,
    width: buttonWidth,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  label: {
    fontFamily: 'Helvetica',
    fontSize: 15,
    color: '#A0A0A0',
    textAlign: 'center',
  },
  labelSelected: {
    color: '#770FDF',
  },
})
