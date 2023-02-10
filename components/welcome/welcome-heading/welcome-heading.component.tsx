import React from 'react';
import { View } from 'react-native';

import Heading from '../../shared/heading/heading.component';

export interface WelcomeHeadingProps {
  textUpper: string;
  textLower: string;
}

export function WelcomeHeading(props: WelcomeHeadingProps) {
  const { textUpper, textLower } = props;

  return (
    <View>
      <Heading color="black" size="xl" weight="700">
        {textUpper}
      </Heading>
      <Heading color="black" size="xl" weight="900" italic>
        {textLower}
      </Heading>
    </View>
  );
}

export default WelcomeHeading;
