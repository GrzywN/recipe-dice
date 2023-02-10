import React from 'react';
import { View } from 'react-native';

import styles from './dice-group.styles';
import ButtonDice from '../../shared/button-dice/button-dice.component';
import ArrowUpIcon from '../../assets/arrow-up-icon/arrow-up-icon.component';
import Heading from '../../shared/heading/heading.component';

export interface DiceGroupProps {
  ctaText: string;
}

export function DiceGroup(props: DiceGroupProps) {
  const { ctaText } = props;

  return (
    <View style={styles.container}>
      <ButtonDice />
      <ArrowUpIcon style={styles.arrow} />
      <Heading color="black" size="sm" weight="700" align="center">
        {ctaText}
      </Heading>
    </View>
  );
}

export default DiceGroup;
