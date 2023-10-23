import { StyleSheet, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../CONSTANTS/CONSTANTS';

const InputContainer = ({ children, borderColor = COLORS.INACTIVE }) => {
  return <View style={styles.inputContainer(borderColor)}>{children}</View>;
};

export default InputContainer;

const styles = StyleSheet.create({
  inputContainer: (borderColor) => ({
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    gap: 8,
    borderWidth: 1,
    borderColor: borderColor,
    borderRadius: 6,
  }),
});
