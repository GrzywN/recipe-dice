import React from 'react';
import { SvgProps } from 'react-native-svg';

import ArrowUpIconSvg from '../../../assets/icons/ArrowUpIcon.svg';

export interface ArrowUpIconProps extends SvgProps {}

export function ArrowUpIcon(props: ArrowUpIconProps) {
  return <ArrowUpIconSvg {...props} />;
}

export default ArrowUpIcon;
