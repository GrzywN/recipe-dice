import React from 'react';
import { SvgProps } from 'react-native-svg';

import GirlCookingIllustrationSvg from '../../../assets/illustrations/GirlCookingIllustration.svg';

export interface GirlCookingIllustrationProps extends SvgProps {}

export function GirlCookingIllustration(props: SvgProps) {
  return <GirlCookingIllustrationSvg {...props} />;
}

export default GirlCookingIllustration;
