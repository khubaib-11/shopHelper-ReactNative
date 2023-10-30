import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { H2, P } from '../Typography/Typography';
import { COLORS } from '../../CONSTANTS/CONSTANTS';
import { Minus, Plus } from 'lucide-react-native';
import SquareBackgroundContainer from '../SquareBackgroundContainer/SquareBackgroundContainer';

const CartItem = ({ item, handleCartUpdate }) => {
  return (
    <View style={styles.productWrapper}>
      <View>
        <H2 color={COLORS.BLACK}>{item.name}</H2>
      </View>
      <View>
        <P color={COLORS.BLACK}>
          {' '}
          {item.price} * {item.quantity}= {item.price * item.quantity}
        </P>
      </View>
      <View style={styles.productQuantityWrapper}>
        <SquareBackgroundContainer
          onPress={() => handleCartUpdate(item.barcode, 'decrement')}
        >
          <Minus size={20} color={COLORS.WHITE} />
        </SquareBackgroundContainer>
        <P color={COLORS.BLACK}>{item.quantity}</P>
        <SquareBackgroundContainer
          onPress={() => handleCartUpdate(item.barcode, 'increment')}
        >
          <Plus size={20} color={COLORS.WHITE} />
        </SquareBackgroundContainer>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  productWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#dceadd',
    borderRadius: 6,
    paddingVertical: 18,
    paddingHorizontal: 6,
  },
  productQuantityWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
});
