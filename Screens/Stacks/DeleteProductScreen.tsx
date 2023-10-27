import React, { useState } from 'react';
import { StyleSheet, View, Modal, Pressable, Alert } from 'react-native';

import AlertBox from '../../components/AlertBox/AlertBox';
import AlertMessage from '../../components/AlertMessage/AlertMessage';
import AlertButton from '../../components/AlertButton/AlertButton';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';
import StartScanContainer from '../../components/StartScanContainer/StartScanContainer';

import { COLORS } from '../../CONSTANTS/CONSTANTS';
import { ALertIcon } from '../../components/Icons/Icons';
import { ArrowLeft } from 'lucide-react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { H2 } from '../../components/Typography/Typography';
import { useFileData } from '../../context/FileDataContext';
import ProductFound from '../../components/ProductFound/ProductFound';

const DeleteProductScreen = () => {
  const { storeProducts, deleteProductFromStore } = useFileData();
  const products = [...storeProducts];
  const [showAlert, setShowAlert] = useState(false);
  const [allowScanning, setAllowScanning] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [productFound, setProductFound] = useState(false);
  const [barcodeToDelete, setBarcodeToDelete] = useState('');

  function handleSearchProduct(barcode) {
    const productExists = products.find(
      (product) => product.barcode === barcode
    );
    if (productExists) setProductFound(true);
  }

  return (
    <View style={styles.screen}>
      <InputWithLabel
        label="Product Barcode"
        placeholder="*************"
        editable={false} // barcode can only be changed with scan and state
      />
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
              setAllowScanning(false);
              setBarcodeToDelete(barcode.data);
              handleSearchProduct(barcode.data);
            }}
          />
        </Modal>
      )}

      {/* Only appears if product is found */}
      {productFound && (
        <View style={styles.productFoundContainer}>
          <H2>This product is found:</H2>
          <ProductFound
            border={COLORS.WARNING}
            background={COLORS.WARNING}
            btnText="Yes, delete product"
            prompt="Do you want to delete this item from your store?"
            // onPressCancel={() => setShowAlert(false)}
            onPressConfirm={() => setShowAlert(true)}
          />
          {/* Show this input container if user agrees to change price, initially hide it */}
        </View>
      )}

      {showAlert && (
        <AlertBox>
          <ALertIcon />
          <AlertMessage
            alertTitle="Are you sure to delete coca cola?"
            msg="This will stop scanning and send you back to home screen."
          />

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
              No, don’t delete{' '}
            </AlertButton>
            <AlertButton
              textColor={COLORS.WHITE}
              background={COLORS.WARNING}
              border={COLORS.WARNING}
              onPress={() => {
                deleteProductFromStore(barcodeToDelete);
              }}
            >
              Yes, delete it
            </AlertButton>
          </View>
        </AlertBox>
      )}
    </View>
  );
};

export default DeleteProductScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },

  productFoundContainer: {
    marginTop: 24,
    gap: 8,
  },
});
