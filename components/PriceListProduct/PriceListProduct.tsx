import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { H2, P } from '../Typography/Typography';
import { COLORS } from '../../CONSTANTS/CONSTANTS';

type Props = {
  name: string;
  price: number;
  barcode: number;
};

const PriceListProduct = ({ name, price, barcode }: Props) => {
  return (
    <View style={styles.productContainer}>
      <H2>{name}</H2>
      <View style={styles.pricingContainer}>
        <H2>==</H2>
        <H2 color={COLORS.WARNING}>{price}</H2>
      </View>
    </View>
  );
};

export default PriceListProduct;

const styles = StyleSheet.create({
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(217, 217, 217, 0.50)',
    padding: 12,
    borderRadius: 6,
  },
  pricingContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
