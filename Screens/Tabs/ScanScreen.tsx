import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

import { H2, P } from '../../components/Typography/Typography';
import AlertButton from '../../components/AlertButton/AlertButton';
import { COLORS } from '../../CONSTANTS/CONSTANTS';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScanButton from '../../components/ScanButton/ScanButton';
import { useFileData } from '../../context/FileDataContext';
import Message from '../../components/Message/Message';
import { Store } from 'lucide-react-native';

interface Product {
  name: string;
  price: string;
  barcode: string;
  quantity: number;
}

const ScanScreen = () => {
  const { storeProducts } = useFileData();
  const storeHasProducts = storeProducts.length > 0;

  const [hasPermission, setHasPermission] = useState(null);
  // initially scanned true, which will prevent barcode from scanning,
  // it become false and allow scanning only when barcodeScan button is pressed
  const [scanned, setScanned] = useState(true);

  // initially cart is empty, it will get values when scan happens
  const [cart, setCart] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  // Handlers
  // const handleBarCodeScanned = ({ type, data: barcode }) => {
  //   // STEP 1) disable scanning again after 1 scan and it will be enabled only when scan button is pressed
  //   setScanned(true);
  //   alert(`Bar code with type ${type} and data ${barcode} has been scanned!`);

  //   // STEP 2) Find product in cart array first
  //   let itemExistsInCart;

  //   if (cart.length > 0) {
  //     itemExistsInCart = cart.find((i) => i.barcode === barcode);
  //   }

  //   console.log(itemExistsInCart);
  //   // STEP 2a) item not found in cart
  //   if (!itemExistsInCart) {
  //     console.log('I am running');
  //     // then find it in product in array coming from context (read from local file)
  //     const itemExistsInFile = storeProducts.find((i) => i.barcode === barcode);

  //     console.log(itemExistsInFile);

  //     // if it doesn't exist, show alert that product with this barcode not found
  //     if (!itemExistsInFile) {
  //       Alert.alert(
  //         'Barcode not found in file',
  //         'Product with this barcode is not added in the store.'
  //       );
  //       return;
  //     }

  //     // if product found in local file, add it to cart with a quantity of 1
  //     // setCart((prev) => [...prev, { ...itemExistsInFile, quantity: 1 }]);
  //     setCart((prev) => {
  //       console.log([...prev, { ...itemExistsInFile, quantity: 1 }]);
  //       [...prev, { ...itemExistsInFile, quantity: 1 }];
  //     });
  //     console.log('I am ending');
  //   }

  //   // STEP 3) Item found in cart, increase its quantity by 1,
  //   // it can only be found if cart is not empty

  //   const updatedCart = cart.map((item) => {
  //     if (item.barcode === barcode) {
  //       return { ...item, quantity: item.quantity + 1 };
  //     } else {
  //       return item;
  //     }
  //   });

  //   setCart(updatedCart);
  // };

  function handleBarCodeScanned({ type, data: barcode }) {
    // users scans barcode
    // STEP 1) disable scanning again after 1 scan and it will be enabled only when scan button is pressed
    setScanned(true);
    alert(`Bar code with type ${type} and data ${barcode} has been scanned!`);

    // 1) Cart is not empty & item is present in it
    if (cart.length > 0 && cart.find((i) => i.barcode === barcode)) {
      const newItem = cart.find((i) => i.barcode === barcode);
      const updatedCart = cart.map((c) => {
        if (c.barcode === newItem.barcode) {
          //Pre-Increment (++c): Example: If c is initially 5, ++c increments c to 6 and returns 6.
          // c++ will not work. Example: If c is initially 5, c++ returns 5 and then increments c to 6.
          return { ...c, quantity: ++c.quantity };
        } else {
          return c;
        }
      });
      setCart(updatedCart);
    } else {
      // 2) Cart is empty, search item in file
      const newItem = storeProducts.find((i) => i.barcode === barcode);
      if (!newItem) {
        Alert.alert('Product not found in store');
        return;
      }
      setCart((prev) => [...prev, { ...newItem, quantity: 1 }]);
    }
  }

  console.log({ cart });

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: storeHasProducts ? '#000' : COLORS.WHITE,
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
      }}
    >
      {!storeHasProducts && (
        <Message>
          <Store size={48} color={COLORS.BLACK} strokeWidth={1.5} />
          <H2>Your store is empty. Please add products to see prices here.</H2>
          <AlertButton onPress={() => navigation.navigate('AddProductScreen')}>
            Go to add products
          </AlertButton>
          <AlertButton onPress={() => navigation.navigate('HomeScreen')}>
            Go to Home Screen
          </AlertButton>
        </Message>
      )}

      {storeHasProducts && (
        <>
          <View style={styles.topBtns}>
            <AlertButton
              border={COLORS.WARNING}
              background={COLORS.WARNING}
              textColor={COLORS.WHITE}
              onPress={() => {
                Alert.alert(
                  'Do you want to cancel scanning?',
                  'This will delete all scanned items and sends you back to the home screen.',
                  [
                    {
                      text: 'Keep scanning',
                      onPress: () => null,
                    },
                    {
                      text: 'Cancel scan',
                      onPress: () => navigation.navigate('HomeScreen'),
                      style: 'destructive',
                    },
                  ],
                  {
                    cancelable: true,
                  }
                );
              }}
            >
              Cancel Scan
            </AlertButton>
            {cart.length > 0 ? (
              <AlertButton
                border={COLORS.SUCCESS}
                background={COLORS.SUCCESS}
                textColor={COLORS.WHITE}
                onPress={() => navigation.navigate('CartScreen', cart)}
              >
                Make Bill
              </AlertButton>
            ) : null}
          </View>

          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{ flex: 1 }}
          />
          <View
            style={{
              alignItems: 'center',
              gap: 16,
              paddingVertical: 32,
            }}
          >
            <ScanButton onPress={() => setScanned(false)} />
            <P>Press button to scan</P>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  topBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
