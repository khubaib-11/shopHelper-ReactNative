import { StyleSheet, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../CONSTANTS/CONSTANTS';

const InputContainer = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default InputContainer;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    gap: 8,
    borderWidth: 1,
    borderColor: COLORS.INACTIVE,
    borderRadius: 6,
  },
});
