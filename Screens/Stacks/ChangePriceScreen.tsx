import { StyleSheet, KeyboardAvoidingView, View } from 'react-native';
import React from 'react';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';
import StartScanContainer from '../../components/StartScanContainer/StartScanContainer';
import ButtonFull from '../../components/ButtonFull/ButtonFull';
import { H2, P } from '../../components/Typography/Typography';
import ProductFound from '../../components/ProductFound/ProductFound';
import Input from '../../components/Input/Input';
import InputContainer from '../../components/InputContainer/InputContainer';

const ChangePriceScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.inputsContainer}>
        <InputWithLabel label="Barcode" placeholder="************" />
        <StartScanContainer />

        <View style={styles.productFoundContainer}>
          <H2>This product is found:</H2>
          <ProductFound />
          {/* Show this input container if user agrees to change price, initially hide it */}
          <InputContainer>
            <Input placeholder="Enter New Price" />
          </InputContainer>
        </View>
      </View>

      {/* This will appear after scan & if product found */}
      <ButtonFull>Save New Price</ButtonFull>
    </View>
  );
};

export default ChangePriceScreen;

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    flex: 1,
  },

  inputsContainer: {
    flex: 1,
  },

  productFoundContainer: {
    marginTop: 24,
    gap: 8,
  },
});
