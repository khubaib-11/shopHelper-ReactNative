import React from 'react';
import { StyleSheet, View } from 'react-native';

import Alert from '../../components/Alert/Alert';
import AlertMessage from '../../components/AlertMessage/AlertMessage';
import AlertButton from '../../components/AlertButton/AlertButton';
import InputWithLabel from '../../components/InputWithLabel/InputWithLabel';
import StartScanContainer from '../../components/StartScanContainer/StartScanContainer';

import { COLORS } from '../../CONSTANTS/CONSTANTS';
import { ALertIcon } from '../../components/Icons/Icons';

const DeleteProductScreen = () => {
  return (
    <View style={styles.screen}>
      <InputWithLabel
        label="Product Barcode"
        placeholder="*************"
        editable={false} // barcode can only be changed with scan and state
      />
      <StartScanContainer />
      <Alert>
        <ALertIcon />
        <AlertMessage
          alertTitle="Are you sure to delete coca cola?"
          msg="This will stop scanning and send you back to home screen."
        />

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            //   gap between 2 buttons lest and right
            gap: 8,
            marginTop: 24,
          }}
        >
          <AlertButton textColor={COLORS.WARNING} border={COLORS.WARNING}>
            No, don’t delete{' '}
          </AlertButton>
          <AlertButton
            textColor={COLORS.WHITE}
            background={COLORS.WARNING}
            border={COLORS.WARNING}
          >
            Yes, delete it
          </AlertButton>
        </View>
      </Alert>
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
});
