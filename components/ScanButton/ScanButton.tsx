import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { QrCode } from 'lucide-react-native';
import { COLORS } from '../../CONSTANTS/CONSTANTS';

const ScanButton = () => {
  return (
    <TouchableOpacity>
      <View style={styles.btnContainer}>
        <QrCode color={COLORS.WHITE} size={24} />
      </View>
    </TouchableOpacity>
  );
};

export default ScanButton;

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLORS.ALERT,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: COLORS.WHITE,
    borderWidth: 4,
  },
});
