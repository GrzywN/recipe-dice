import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import WelcomeHeading from './components/welcome/welcome-heading/welcome-heading.component';
import GirlCookingIllustration from './components/assets/girl-cooking-illustration/girl-cooking-illustration.component';
import InstructionTextGroup from './components/shared/introduction-text-group/introduction-text-group.component';
import DiceGroup from './components/shared/dice-group/dice-group.component';
import { PRIMARY, WHITE } from './styles/colors';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.upperWrapper}>
        <WelcomeHeading textUpper="Welcome to" textLower="Recipe Dice" />
        <GirlCookingIllustration />
      </View>
      <View style={styles.lowerWrapper}>
        <InstructionTextGroup
          heading="Wanna cook?"
          paragraph="If you don't have any idea what to cook then draw a recipe!"
        />
        <DiceGroup ctaText="Click on a dice to draw a recipe!" />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperWrapper: {
    flex: 1,
    backgroundColor: PRIMARY,
    paddingTop: 48,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lowerWrapper: {
    flex: 1,
    backgroundColor: WHITE,
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
