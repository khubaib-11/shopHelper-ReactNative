import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useNavigation } from '@react-navigation/native';

import { P } from '../../components/Typography/Typography';
import AlertButton from '../../components/AlertButton/AlertButton';
import { COLORS } from '../../CONSTANTS/CONSTANTS';
import { SafeAreaView } from 'react-native-safe-area-context';
import ScanButton from '../../components/ScanButton/ScanButton';

const ScanScreen = () => {
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
        backgroundColor: '#000',
        paddingVertical: 20,
        justifyContent: 'space-between',
      }}
    >
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
