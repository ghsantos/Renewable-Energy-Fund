import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import FundCard from '../../Components/FundCard'
import Header from '../../Components/Header'

const businessStatisticsImage = require('../../assets/business_statistics.png')
const iconWind = require('../../assets/icon_wind.png')
const iconSolar = require('../../assets/icon_solar.png')
const iconNature = require('../../assets/icon_nature.png')

function Home(): JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <Header
        accountAmount={1345.23}
        portfolioAmount={1245.32}
        portfolioVariation={31.2}
      />

      <View style={[styles.defaultContent, styles.fundTitleContainer]}>
        <Text style={styles.fundTitle}>Funds</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.fundCards}>
          <FundCard title="Wind Fund" icon={iconWind} />
          <FundCard title="Solar Fund" icon={iconSolar} />
          <FundCard title="Nature Fund" icon={iconNature} />
        </View>
      </ScrollView>

      <View style={styles.defaultContent}>
        <View style={styles.horizontalCard}>
          <View style={styles.horizontalCardTextContainer}>
            <Text style={styles.horizontalCardTitle}>
              Learn more about carbon credits
            </Text>
            <Text style={styles.horizontalCardSubtitle}>
              Check out our top tips!
            </Text>
          </View>
          <View style={styles.horizontalCardImage}>
            <Image source={businessStatisticsImage} />
          </View>
        </View>

        <View style={styles.verticalCardsContainer}>
          <View style={styles.verticalCard}>
            <Text style={styles.verticalCardText}>
              Why should you invest here?
            </Text>
          </View>
          <View style={styles.verticalCard} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  defaultContent: {
    paddingHorizontal: 20,
  },
  fundTitleContainer: {
    marginVertical: 20,
  },
  fundTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  fundCards: {
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  horizontalCard: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 20,
    padding: 20,
    backgroundColor: '#770FDF',
  },
  horizontalCardTextContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  horizontalCardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  horizontalCardSubtitle: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '400',
  },
  horizontalCardImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  verticalCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  verticalCard: {
    height: 240,
    width: '48%',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 20,
    backgroundColor: '#f4f4f4',
  },
  verticalCardText: {
    fontSize: 12,
    fontWeight: '600',
  },
})

export default Home
