import React from 'react';
import { StyleSheet, View } from 'react-native';
import GradientCard from '../../components/GradientCard/GradientCard';

import InputContainer from '../../components/InputContainer/InputContainer';
import Input from '../../components/Input/Input';
import ButtonFull from '../../components/ButtonFull/ButtonFull';
import { H1, P } from '../../components/Typography/Typography';
import { COLORS } from '../../CONSTANTS/CONSTANTS';

const BillScreen = () => {
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
        <H1 fontSize={70}>2570</H1>
        <InputContainer borderColor={COLORS.BLACK}>
          <Input placeholder="Payment Amount" />
        </InputContainer>
      </GradientCard>
      <GradientCard colorsArray={['#EAAFC8', '#654EA3']}>
        <P color={COLORS.WHITE}>Refund Amount to Customer</P>
        <H1 color={COLORS.WHITE} fontSize={70}>
          100
        </H1>
      </GradientCard>
      <ButtonFull>Finish</ButtonFull>
    </View>
  );
};

export default BillScreen;

const styles = StyleSheet.create({});
