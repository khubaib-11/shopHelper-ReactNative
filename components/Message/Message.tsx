import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { P } from '../Typography/Typography';

const Message = ({ children }) => {
  return <View style={styles.messageContainer}>{children}</View>;
};

export default Message;

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
});
