import { StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';
import { Search } from 'lucide-react-native';
import { COLORS } from '../../CONSTANTS/CONSTANTS';
import { FlashList } from '@shopify/flash-list';

import InputContainer from '../../components/InputContainer/InputContainer';
import Input from '../../components/Input/Input';
import Message from '../../components/Message/Message';
import { H2, P } from '../../components/Typography/Typography';
import { Store } from 'lucide-react-native';
import PriceListProduct from '../../components/PriceListProduct/PriceListProduct';
import AddSpacingInLists from '../../components/AddSpacingInLists/AddSpacingInLists';

import { useFileData } from '../../context/FileDataContext';

const PriceListScreen = () => {
  const { storeProducts } = useFileData();
  const storeHasProducts = storeProducts.length > 0;

  return (
    <SafeAreaView
      style={{
        paddingVertical: 16,
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: COLORS.WHITE,
      }}
    >
      <ScreenTitle>Price List</ScreenTitle>
      {/* <InputContainer>
        <Search size={24} color={COLORS.INACTIVE} />
        <Input
          placeholder="Search products"
          value={searchQuery}
          handleChange={handleSearchQuery}
        />
      </InputContainer> */}

      {/* If there are no products added in store show message component */}
      {!storeHasProducts && (
        <Message>
          <Store size={48} color={COLORS.BLACK} strokeWidth={1.5} />
          <H2>Your store is empty. Please add products to see prices here.</H2>
        </Message>
      )}

      {/* If there are  products added in store show products  component */}
      {storeHasProducts && (
        <View style={styles.list}>
          <FlashList
            data={storeProducts}
            estimatedItemSize={200}
            ItemSeparatorComponent={AddSpacingInLists}
            renderItem={({ item }) => (
              <PriceListProduct
                name={item.name}
                price={item.price}
                barcode={item.barcode}
              />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

export default PriceListScreen;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 24,
  },
});
