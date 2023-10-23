import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';

import AlertButton from '../../components/AlertButton/AlertButton';
import { COLORS } from '../../CONSTANTS/CONSTANTS';
import { H1, P } from '../../components/Typography/Typography';
import CartItem from '../../components/CartItem/CartItem';
import AddSpacingInLists from '../../components/AddSpacingInLists/AddSpacingInLists';

const CartScreen = () => {
  // ? Delete this dummy array and replace real one coming from file
  const products = [
    { name: 'Milk Pack', price: 70, quantity: 8, barcode: 546465 },
    { name: 'Coca Cola', price: 180, quantity: 5, barcode: 46464446 },
  ];
  return (
    <View
      style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 16, gap: 16 }}
    >
      <View style={{ alignSelf: 'flex-end' }}>
        <AlertButton
          border={COLORS.SUCCESS}
          background={COLORS.SUCCESS}
          textColor={COLORS.WHITE}
          //   onPress={() => navigation.navigate('CartScreen')}
        >
          Add More Products
        </AlertButton>
      </View>

      <FlashList
        data={products}
        estimatedItemSize={20}
        ItemSeparatorComponent={AddSpacingInLists}
        renderItem={({ item }) => <CartItem item={item} />}
      />

      {/* Total */}
      <TotalAmount />
    </View>
  );
};

function TotalAmount() {
  const navigation = useNavigation();
  return (
    <View style={styles.billWrapper}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <P>Total =</P>
        <H1>2570</H1>
      </View>
      <View>
        <AlertButton
          border={COLORS.SUCCESS}
          background={COLORS.SUCCESS}
          textColor={COLORS.WHITE}
          onPress={() => navigation.navigate('BillScreen')}
        >
          Pay Bill
        </AlertButton>
      </View>
    </View>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  billWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 32,
    backgroundColor: COLORS.WHITE,
    elevation: 10,
    borderRadius: 6,
    paddingHorizontal: 16,
    position: 'absolute',
    bottom: 16,
    left: 20,
    width: '100%',
    zIndex: 100,
  },
});
