import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { P } from '../Typography/Typography';
import { COLORS } from '../../CONSTANTS/CONSTANTS';

const AlertButton = ({
  children,
  textColor = COLORS.BLACK,
  background = '#fff',
  border = COLORS.BLACK,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: background,
        borderWidth: 1,
        borderColor: border,
        padding: 8,
        borderRadius: 6,
      }}
    >
      <P color={textColor}>{children}</P>
    </TouchableOpacity>
  );
};

export default AlertButton;

const styles = StyleSheet.create({});
