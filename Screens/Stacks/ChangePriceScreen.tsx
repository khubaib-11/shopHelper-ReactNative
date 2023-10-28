import React, { useState } from 'react';
import { Modal, Pressable, StyleSheet, View, Alert } from 'react-native';

import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';
import Input from '../../components/Input/Input';
import InputContainer from '../../components/InputContainer/InputContainer';
import ProductFound from '../../components/ProductFound/ProductFound';
import StartScanContainer from '../../components/StartScanContainer/StartScanContainer';

import { H2 } from '../../components/Typography/Typography';
import { ArrowLeft } from 'lucide-react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useFileData } from '../../context/FileDataContext';
import { COLORS } from '../../CONSTANTS/CONSTANTS';
import AlertBox from '../../components/AlertBox/AlertBox';
import { ALertIcon } from '../../components/Icons/Icons';
import AlertMessage from '../../components/AlertMessage/AlertMessage';
import AlertButton from '../../components/AlertButton/AlertButton';

const ChangePriceScreen = () => {
  const { storeProducts, changePriceOfProduct } = useFileData();
  const [isProductFound, setIsProductFound] = useState(false);
  const [allowScanning, setAllowScanning] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [barcodeToChangePrice, setBarcodeToChangePrice] = useState('');
  const [newPrice, setNewPrice] = useState('');

  function handleSearchProduct(barcode) {
    const productExists = storeProducts.find(
      (prod) => prod.barcode === barcode
    );

    if (productExists === undefined) {
      Alert.alert('Product not found', 'This product does not exist');
    } else {
      setIsProductFound(true);
    }
  }

  function handlePriceChange(newPrice) {
    setNewPrice(newPrice);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputsContainer}>
        <InputWithLabel label="Barcode" placeholder="************" />

        <StartScanContainer onPress={() => setAllowScanning(true)} />

        {allowScanning && (
          <Modal>
            <Pressable onPress={() => setAllowScanning(false)}>
              <ArrowLeft size={24} color={COLORS.BLACK} />
            </Pressable>
            <BarCodeScanner
              style={{ flex: 1 }}
              onBarCodeScanned={(barcode) => {
                if (scanned) return undefined;
                setScanned(true);
                setBarcodeToChangePrice(barcode.data);
                handleSearchProduct(barcode.data);
                setAllowScanning(false);
              }}
            />
          </Modal>
        )}

        {isProductFound && (
          <View style={styles.productFoundContainer}>
            <H2>This product is found:</H2>
            <ProductFound
              prompt="Do you want to change price of this product?"
              btnText="Yes, change price"
              onPressConfirm={() => setShowAlert(true)}
            />
            {/* Show this input container if user agrees to change price, initially hide it */}
          </View>
        )}
      </View>

      {showAlert && (
        <AlertBox>
          <ALertIcon />
          <AlertMessage
            alertTitle="Are you sure to change price?"
            msg="Please enter below new Price:"
          />
          <InputContainer>
            <Input
              placeholder="New Price"
              value={newPrice}
              handleChange={handlePriceChange}
            />
          </InputContainer>

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              //   gap between 2 buttons left and right
              gap: 8,
              marginTop: 24,
            }}
          >
            <AlertButton
              textColor={COLORS.WARNING}
              border={COLORS.WARNING}
              onPress={() => setShowAlert(false)}
            >
              No, don’t change{' '}
            </AlertButton>
            <AlertButton
              textColor={COLORS.WHITE}
              background={COLORS.WARNING}
              border={COLORS.WARNING}
              onPress={() => {
                changePriceOfProduct(barcodeToChangePrice, newPrice);
                setShowAlert(false);
              }}
            >
              Yes,Change price
            </AlertButton>
          </View>
        </AlertBox>
      )}
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
