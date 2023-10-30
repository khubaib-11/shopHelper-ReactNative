import { StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { FONT_FAMILY } from '../../CONSTANTS/CONSTANTS';

const Input = ({
  placeholder = '⚠️ No placeholder provided',
  editable = true,
  value,
  handleChange,
  keyboardType = 'default',
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      autoCorrect
      editable={editable}
      value={value}
      onChangeText={(val) => handleChange(val)}
      keyboardType={keyboardType}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    paddingVertical: 16,
    fontFamily: FONT_FAMILY.REGULAR,
    fontSize: 16,
    width: '100%',
  },
});
