import React, { useState } from 'react';
import { StyleSheet, View, Modal, Alert, Pressable } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { useFileData } from '../../context/FileDataContext';

import { BarCodeScanner } from 'expo-barcode-scanner';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';
import StartScanContainer from '../../components/StartScanContainer/StartScanContainer';
import ButtonFull from '../../components/ButtonFull/ButtonFull';
import { COLORS, FILE_CONSTANTS } from '../../CONSTANTS/CONSTANTS';
import { ArrowLeft } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { P } from '../../components/Typography/Typography';

const AddProductScreen = () => {
  const navigation = useNavigation();
  const { storeProducts, addNewProductInStore } = useFileData();
  const products = [...storeProducts];

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productBarcode, setProductBarcode] = useState('');
  const [allowScanning, setAllowScanning] = useState(false);
  const [scanned, setScanned] = useState(false);

  function handleNameChange(newName) {
    setProductName(newName);
  }
  function handlePriceChange(newPrice) {
    setProductPrice(newPrice);
  }
  function handleBarcodeChange(newBarcode) {
    setProductBarcode(newBarcode);
  }

  function handleAddNewProduct() {
    const newProduct = {
      name: productName,
      price: productPrice,
      barcode: productBarcode,
    };
    addNewProductInStore(newProduct);

    // clear form fields
    setProductName('');
    setProductPrice('');
    setProductBarcode('');
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputsContainer}>
        <InputWithLabel
          value={productName}
          handleChange={handleNameChange}
          label="Product Name"
          placeholder="Pepsi"
        />
        <InputWithLabel
          value={productPrice}
          handleChange={handlePriceChange}
          label="Product Price"
          placeholder="200"
          keyboardType="numeric"
        />
        <InputWithLabel
          value={productBarcode}
          handleChange={handleBarcodeChange}
          label="Product Barcode"
          placeholder="*************"
          editable={false} // barcode can only be changed with scan and state
        />
        <StartScanContainer
          onPress={() => {
            console.log('Opening camera');
            setAllowScanning(true);
          }}
        />

        {allowScanning && (
          <Modal>
            <Pressable
              style={styles.modal}
              onPress={() => setAllowScanning(false)}
            >
              <ArrowLeft size={24} color={COLORS.BLACK} />
              <P>Back</P>
            </Pressable>
            <BarCodeScanner
              style={{ flex: 1 }}
              onBarCodeScanned={(barcode) => {
                if (scanned) return undefined;

                setScanned(true);
                setProductBarcode(barcode.data);
                setAllowScanning(false);
              }}
            />
          </Modal>
        )}
      </View>

      <ButtonFull
        disabled={!productName || !productPrice || !productBarcode}
        onPress={handleAddNewProduct}
      >
        Save Product
      </ButtonFull>
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

  modal: {
    paddingLeft: 16,
    paddingTop: 16,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
});
