import { StyleSheet } from 'react-native';
import React from 'react';
import { BadgeAlert } from 'lucide-react-native';
import { COLORS } from '../../CONSTANTS/CONSTANTS';

export const ALertIcon = ({ size = 24, color = COLORS.BLACK }) => {
  return <BadgeAlert size={size} color={color} />;
};

const styles = StyleSheet.create({});
