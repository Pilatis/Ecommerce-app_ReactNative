import { StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

export const globalsStyles = StyleSheet.create({
  textDescription: {
    fontSize: 13,
    fontWeight: '500',
    color: Colors.gray,
  },
  defaultTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.baseBlack
  },
  textError: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: Colors.baseBlack,
    marginTop: 20
  }
});
