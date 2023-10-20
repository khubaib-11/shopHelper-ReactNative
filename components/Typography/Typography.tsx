import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, FONT_FAMILY } from '../../CONSTANTS/CONSTANTS';

// Primary Heading
export function H1({
  children,
  color = COLORS.BLACK,
  fontSize = 24,
  fontFamily = FONT_FAMILY.BOLD,
}) {
  return (
    <Text style={{ color: color, fontSize: fontSize, fontFamily: fontFamily }}>
      {children}
    </Text>
  );
}

// SECONDARY Heading -- small one
export function H2({
  children,
  color = COLORS.BLACK,
  fontSize = 20,
  fontFamily = FONT_FAMILY.MEDIUM,
}) {
  return (
    <Text
      style={{
        color: color,
        fontSize: fontSize,
        fontFamily: fontFamily,
      }}
    >
      {children}
    </Text>
  );
}

// Primary Heading
export function P({
  children,
  color = COLORS.BLACK,
  fontSize = 16,
  fontFamily = FONT_FAMILY.REGULAR,
}) {
  return (
    <Text style={{ color: color, fontSize: fontSize, fontFamily: fontFamily }}>
      {children}
    </Text>
  );
}
