import { StyleSheet } from 'react-native';

import * as colors from '../../../styles/colors';

export const styles = StyleSheet.create({
  primary: { color: colors.PRIMARY },
  secondary: { color: colors.SECONDARY },
  tertiary: { color: colors.TERTIARY },
  black: { color: colors.BLACK },
  white: { color: colors.WHITE },
  xs: { fontSize: 12, lineHeight: 16 },
  sm: { fontSize: 14, lineHeight: 20 },
  md: { fontSize: 16, lineHeight: 24 },
  lg: { fontSize: 18, lineHeight: 28 },
  xl: { fontSize: 20, lineHeight: 28 },
  100: { fontWeight: '100' },
  200: { fontWeight: '200' },
  300: { fontWeight: '300' },
  400: { fontWeight: '400' },
  500: { fontWeight: '500' },
  600: { fontWeight: '600' },
  700: { fontWeight: '700' },
  800: { fontWeight: '800' },
  900: { fontWeight: '900' },
  left: { textAlign: 'left' },
  center: { textAlign: 'center' },
  right: { textAlign: 'right' },
  italic: { fontStyle: 'italic' },
  underline: { textDecorationLine: 'underline' },
});

export default styles;
