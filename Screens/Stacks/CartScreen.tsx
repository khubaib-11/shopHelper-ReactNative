import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { useRoute } from '@react-navigation/native';

import AlertButton from '../../components/AlertButton/AlertButton';
import { COLORS } from '../../CONSTANTS/CONSTANTS';
import { H1, P } from '../../components/Typography/Typography';
import CartItem from '../../components/CartItem/CartItem';
import AddSpacingInLists from '../../components/AddSpacingInLists/AddSpacingInLists';

const CartScreen = () => {
  const { params: products } = useRoute();

  console.log(products);

  // create a new state for products, it will be used to change quantity
  const [cartProducts, setCartProducts] = useState([...products]);

  function handleCartUpdate(barcode, action) {
    const updatedCart = cartProducts.map((item) => {
      // Find the item in the cart
      if (item.barcode === barcode) {
        if (action === 'increment') {
          // Increment the quantity
          return { ...item, quantity: item.quantity + 1 };
        }
        if (action === 'decrement' && item.quantity > 0) {
          // Decrement the quantity (if it's greater than 1)
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return { ...item };
        }
      } else {
        return { ...item };
      }
    });
    // Update the cart state
    setCartProducts(updatedCart);
  }

  console.log(cartProducts);

  const bill = cartProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );

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
        data={cartProducts}
        estimatedItemSize={20}
        ItemSeparatorComponent={AddSpacingInLists}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            wholeCart={cartProducts}
            handleCartUpdate={handleCartUpdate}
          />
        )}
      />

      {/* Total */}
      <TotalAmount bill={bill} />
    </View>
  );
};

function TotalAmount({ bill }) {
  const navigation = useNavigation();
  return (
    <View style={styles.billWrapper}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <P>Total =</P>
        <H1>{bill}</H1>
      </View>
      <View>
        <AlertButton
          border={COLORS.SUCCESS}
          background={COLORS.SUCCESS}
          textColor={COLORS.WHITE}
          onPress={() => navigation.navigate('BillScreen', bill)}
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
