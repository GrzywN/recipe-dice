import React from 'react';
import { SvgProps } from 'react-native-svg';

import DiceIllustrationSvg from '../../../assets/illustrations/DiceIllustration.svg';

export interface DiceIllustrationProps extends SvgProps {}

export function DiceIllustration(props: DiceIllustrationProps) {
  return <DiceIllustrationSvg {...props} />;
}

export default DiceIllustration;
