import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import GradientCard from '../../components/GradientCard/GradientCard';
import { useRoute, useNavigation } from '@react-navigation/native';

import InputContainer from '../../components/InputContainer/InputContainer';
import Input from '../../components/Input/Input';
import ButtonFull from '../../components/ButtonFull/ButtonFull';
import { H1, P } from '../../components/Typography/Typography';
import { COLORS } from '../../CONSTANTS/CONSTANTS';

const BillScreen = () => {
  const navigation = useNavigation();
  const { params: totalBill } = useRoute();
  const [payment, setPayment] = useState(0);

  function handlePaymentChange(amount) {
    if (Number(amount) > totalBill) {
      setPayment(totalBill - Number(amount));
    } else {
      setPayment(0);
    }
  }

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'space-around',
      }}
    >
      <GradientCard
        colorsArray={['rgba(249, 240, 71, 0.70)', 'rgba(15, 216, 79, 0.72)']}
      >
        <P>Total</P>
        <H1 fontSize={70}>{totalBill}</H1>
        <InputContainer borderColor={COLORS.BLACK}>
          <Input
            placeholder="Payment Amount"
            keyboardType="numeric"
            handleChange={handlePaymentChange}
          />
        </InputContainer>
      </GradientCard>
      <GradientCard colorsArray={['#EAAFC8', '#654EA3']}>
        <P color={COLORS.WHITE}>Give this amount to Customer</P>
        <H1 color={COLORS.WHITE} fontSize={70}>
          {/* only show amount to refund, if user payment is greater than bill*/}
          {payment}
        </H1>
      </GradientCard>
      <ButtonFull
        onPress={() =>
          Alert.alert(
            'Finish Payment',
            'You will be send back to home screen',
            [
              {
                text: 'Cancel',
                onPress: () => {
                  return;
                },
              },
              {
                text: 'Confirm Payment Finish',
                onPress: () => {
                  navigation.navigate('HomeScreen');
                },
              },
            ]
          )
        }
      >
        Finish
      </ButtonFull>
    </View>
  );
};

export default BillScreen;

const styles = StyleSheet.create({});
