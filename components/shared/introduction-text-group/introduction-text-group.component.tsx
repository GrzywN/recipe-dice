import React from 'react';
import { View } from 'react-native';

import styles from './introduction-text-group.styles';
import Heading from '../../shared/heading/heading.component';
import Typography from '../../shared/typography/typography.component';

export interface IntroductionTextGroupProps {
  heading: string;
  paragraph: string;
}

export function IntroductionTextGroup(props: IntroductionTextGroupProps) {
  const { heading, paragraph } = props;

  return (
    <View style={styles.container}>
      <Heading
        color="black"
        size="lg"
        weight="700"
        align="center"
        style={styles.heading}
      >
        {heading}
      </Heading>
      <Typography
        color="black"
        size="xs"
        weight="500"
        align="center"
        style={styles.paragraph}
      >
        {paragraph}
      </Typography>
    </View>
  );
}

export default IntroductionTextGroup;
