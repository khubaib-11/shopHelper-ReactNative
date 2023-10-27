import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ScanButton from '../ScanButton/ScanButton';
import { COLORS } from '../../CONSTANTS/CONSTANTS';
import { P } from '../Typography/Typography';

const StartScanContainer = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.scanContainer} onPress={onPress}>
      <ScanButton />
      <P color={COLORS.INACTIVE}>Press here to scan barcode</P>
    </TouchableOpacity>
  );
};

export default StartScanContainer;

const styles = StyleSheet.create({
  scanContainer: {
    alignItems: 'center',
    gap: 16,
    backgroundColor: COLORS.BLACK,
    paddingVertical: 16,
    borderRadius: 6,
  },
});
