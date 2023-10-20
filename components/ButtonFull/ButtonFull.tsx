import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { H2 } from '../Typography/Typography';
import { COLORS } from '../../CONSTANTS/CONSTANTS';

const ButtonFull = ({ children }) => {
  return (
    <TouchableOpacity style={styles.btn}>
      <H2 color={COLORS.WHITE}>{children}</H2>
    </TouchableOpacity>
  );
};

export default ButtonFull;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.BLACK,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
});
