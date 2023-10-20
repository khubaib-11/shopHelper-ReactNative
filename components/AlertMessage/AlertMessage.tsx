import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { H2, P } from '../Typography/Typography';

const AlertMessage = ({
  alertTitle = '⚠️ No title provided',
  msg = '⚠️ No msg provided',
}) => {
  return (
    <>
      <H2 color="black">{alertTitle}</H2>
      <P>{msg}.</P>
    </>
  );
};

export default AlertMessage;

const styles = StyleSheet.create({});
