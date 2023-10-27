import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
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

const ScanScreen = () => {
  const { storeProducts } = useFileData();
  const storeHasProducts = storeProducts.length > 0;

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  // Handlers
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

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
            >
              Cancel Scan
            </AlertButton>
            <AlertButton
              border={COLORS.SUCCESS}
              background={COLORS.SUCCESS}
              textColor={COLORS.WHITE}
              onPress={() => navigation.navigate('CartScreen')}
            >
              Make Bill
            </AlertButton>
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
            <ScanButton />
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
