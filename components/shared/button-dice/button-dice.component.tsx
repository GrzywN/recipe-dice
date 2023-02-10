import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import styles from './button-dice.styles';
import DiceIllustration from '../../assets/dice-illustration/dice-illustration.component';

export interface ButtonDiceProps extends TouchableOpacityProps {}

export function ButtonDice(props: ButtonDiceProps) {
  const { style, ...passThroughProps } = props;

  return (
    <TouchableOpacity style={[styles.button, style]} {...passThroughProps}>
      <DiceIllustration />
    </TouchableOpacity>
  );
}

export default ButtonDice;
