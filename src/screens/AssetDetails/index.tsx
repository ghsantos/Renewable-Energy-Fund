import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { LineGraph } from 'react-native-graph'
import { useValue } from '@shopify/react-native-skia'

import { generateRandomGraphData } from '../../utils'
import Button from '../../Components/Button'
import Header from '../../Components/Header'
import InfoStats from '../../Components/InfoStats'
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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
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

        <View style={styles.content}>
          <InfoStats />

          <View style={styles.portfolioContainer}>
            <Text style={styles.portfolioTitle}>Your Portfolio</Text>

            <View style={styles.portfolioItemContainer}>
              <View style={styles.portfolioItem}>
                <Text style={styles.portfolioAmount}>18 credits</Text>
                <Text style={styles.portfolioVariation}>8.41%</Text>
              </View>
              <View style={styles.portfolioItem}>
                <Text style={styles.portfolioAmount}>$328.14</Text>
                <Text style={styles.portfolioPurchase}>
                  Last purchase 28d ago
                </Text>
              </View>
            </View>

            <View style={styles.portfolioButtonsContainer}>
              <View style={styles.portfolioButton}>
                <Button title="Sell" secondary transparent onPress={() => {}} />
              </View>
              <View style={styles.portfolioButton}>
                <Button title="Retire credits" secondary onPress={() => {}} />
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.infoText}>
              You've previously retired 28 credits of this asset
            </Text>
          </View>

          <View style={styles.infoTextContainer}>
            <Text style={styles.infoText}>
              Please note that prices are for reference only and may vary at the
              time of executing a buy or sell order.
            </Text>
            <Text style={styles.infoText}>
              The information provided is not investment advice, and should not
              be used as a recommendation to buy or sell assets.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Buy" onPress={() => {}} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  graph: {
    width: '100%',
    height: 210,
  },
  content: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  portfolioContainer: {
    marginTop: 30,
  },
  portfolioTitle: {
    fontSize: 17,
    fontWeight: '600',
    marginVertical: 6,
  },
  portfolioItemContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  portfolioItem: {
    flex: 1,
  },
  portfolioAmount: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 5,
  },
  portfolioVariation: {
    fontSize: 14,
    fontWeight: '400',
    color: '#0FDF8F',
  },
  portfolioPurchase: {
    fontSize: 14,
    fontWeight: '400',
    color: '#A0A0A0',
  },
  portfolioButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  portfolioButton: {
    width: '48%',
  },
  infoTextContainer: {
    marginVertical: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#F4F4F4',
    borderRadius: 4,
  },
  infoText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#A0A0A0',
    marginVertical: 5,
  },
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
})

export default AssetDetails
