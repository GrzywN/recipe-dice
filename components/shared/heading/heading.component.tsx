import React from 'react';
import { Text, StyleProp, TextStyle, TextProps } from 'react-native';

import styles from './heading.styles';

export interface HeadingProps extends TextProps {
  color: 'primary' | 'secondary' | 'tertiary' | 'black' | 'white';
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  weight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  align?: 'left' | 'center' | 'right';
  italic?: boolean;
  underline?: boolean;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

export function Heading(props: HeadingProps) {
  const {
    color,
    size,
    weight = '700',
    align = 'left',
    italic = false,
    underline = false,
    style,
    children,
    ...passThroughProps
  } = props;

  return (
    <Text
      style={[
        styles[color],
        styles[size],
        styles[weight],
        styles[align],
        ...[italic ? styles.italic : []],
        ...[underline ? styles.underline : []],
        style,
      ]}
      {...passThroughProps}
    >
      {children}
    </Text>
  );
}

export default Heading;
