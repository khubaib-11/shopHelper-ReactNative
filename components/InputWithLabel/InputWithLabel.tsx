import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import InputContainer from '../InputContainer/InputContainer';
import Input from '../Input/Input';
import { P } from '../Typography/Typography';

const InputWithLabel = ({
  label = '⚠️ No label',
  placeholder = '⚠️ No placeholder',
  editable = true,
}) => {
  return (
    <View style={styles.container}>
      <P>{label}</P>
      <InputContainer>
        <Input placeholder={placeholder} editable={editable} />
      </InputContainer>
    </View>
  );
};

export default InputWithLabel;

const styles = StyleSheet.create({
  container: {
    gap: 8,
    marginBottom: 16,
  },
});
