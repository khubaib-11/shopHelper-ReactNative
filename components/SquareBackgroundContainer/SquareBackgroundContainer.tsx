import { TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../../CONSTANTS/CONSTANTS';

function SquareBackgroundContainer({
  children,
  onPress,
  bgColor = COLORS.BLACK,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: 40,
        height: 40,
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
      }}
    >
      {children}
    </TouchableOpacity>
  );
}

export default SquareBackgroundContainer;
