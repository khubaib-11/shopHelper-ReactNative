import React from 'react';
import { StyleSheet, View } from 'react-native';

import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';
import StartScanContainer from '../../components/StartScanContainer/StartScanContainer';
import ButtonFull from '../../components/ButtonFull/ButtonFull';

const AddProductScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.inputsContainer}>
        <InputWithLabel label="Product Name" placeholder="Pepsi" />
        <InputWithLabel label="Product Price" placeholder="200" />
        <InputWithLabel
          label="Product Barcode"
          placeholder="*************"
          editable={false} // barcode can only be changed with scan and state
        />
        <StartScanContainer />
      </View>

      <ButtonFull>Save Product</ButtonFull>
    </View>
  );
};

export default AddProductScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },

  inputsContainer: {
    //  to move the bottom button at end
    flex: 1,
  },
});
