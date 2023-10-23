import { TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS } from '../../CONSTANTS/CONSTANTS';

function SquareBackgroundContainer({ children, bgColor = COLORS.BLACK }) {
  return (
    <TouchableOpacity
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
