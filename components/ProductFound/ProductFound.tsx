import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { H2, P } from '../Typography/Typography';
import { COLORS } from '../../CONSTANTS/CONSTANTS';
import AlertButton from '../AlertButton/AlertButton';

const ProductFound = () => {
  return (
    <View style={styles.card}>
      <View>
        <H2>Coca Cola</H2>
        <P>Barcode: 14654646464</P>
      </View>
      <P>Do you want to delete this coca cola from your store?</P>
      <View style={styles.cardBtns}>
        <AlertButton border={COLORS.ALERT}>Go Back</AlertButton>
        <AlertButton
          border={COLORS.ALERT}
          background={COLORS.ALERT}
          textColor={COLORS.WHITE}
        >
          Yes, change price
        </AlertButton>
      </View>
    </View>
  );
};

export default ProductFound;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderColor: COLORS.BLACK,
    borderWidth: 1,
    borderRadius: 6,
    padding: 16,
    gap: 32,
  },

  cardBtns: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
  },
});
