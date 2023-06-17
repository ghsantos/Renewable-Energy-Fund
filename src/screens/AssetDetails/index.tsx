import React, { useState } from 'react'
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { LineGraph } from 'react-native-graph'
import { useValue } from '@shopify/react-native-skia'

import { generateRandomGraphData } from '../../utils'
import Header from '../../Components/Header'
import { Selection } from '../../Components/TimeSelection'
import { TopAxisLabel, BottomAxisLabel } from '../../Components/AxisLabel'

function AssetDetails(): JSX.Element {
  const [coinGraphData, setCoinGraphData] = useState(
    generateRandomGraphData(28),
  )

  const price = coinGraphData[coinGraphData.length - 1].value
  const initialPrice = coinGraphData[0].value
  const variation = (price * 100) / initialPrice - 100

  const statusColor = variation < 0 ? '#EE8688' : '#0FDF8F'

  const transition = useValue(0)
  const state = useValue({
    next: 0,
    current: 0,
  })

  const getGraphData = () => {
    setCoinGraphData(generateRandomGraphData(28))
  }

  return (
    <ScrollView style={styles.container}>
      <Header
        accountAmount={1345.23}
        portfolioAmount={1245.32}
        portfolioVariation={31.2}
      />
      <LineGraph
        points={coinGraphData}
        color={statusColor}
        animated={true}
        TopAxisLabel={() => <TopAxisLabel points={coinGraphData} />}
        BottomAxisLabel={() => <BottomAxisLabel points={coinGraphData} />}
        style={styles.graph}
      />
      <Selection
        state={state}
        transition={transition}
        onPressItem={getGraphData}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  graph: {
    width: '100%',
    height: 210,
  },
})

export default AssetDetails
