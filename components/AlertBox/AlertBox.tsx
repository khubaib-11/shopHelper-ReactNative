import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AlertBox = ({ children }) => {
  return (
    <View style={[StyleSheet.absoluteFill]}>
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.80)',
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 6,
            padding: 24,
            alignItems: 'center',
            gap: 16,
          }}
        >
          {children}
        </View>
      </View>
    </View>
  );
};

export default AlertBox;

const styles = StyleSheet.create({});
