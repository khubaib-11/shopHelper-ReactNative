import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { ArchiveRestore, ArchiveX, Archive } from 'lucide-react-native';
import { COLORS } from '../../CONSTANTS/CONSTANTS';
import { H1, P, H2 } from '../../components/Typography/Typography';
import ScreenTitle from '../../components/ScreenTitle/ScreenTitle';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ paddingVertical: 16, paddingHorizontal: 20 }}>
      <ScreenTitle>How can I help?</ScreenTitle>

      {/* Gradient buttons */}
      <View style={styles.homeNavigation}>
        {/* 1st column */}
        <TouchableOpacity
          onPress={() => navigation.navigate('AddProductScreen')}
        >
          <LinearGradient
            end={{ x: 0.7, y: 0.8 }}
            colors={['rgba(240, 232, 76, 0.74)', 'rgba(17, 208, 78, 0.90)']}
            style={styles.leftNavigation}
          >
            <View style={styles.leftNavigationDesc}>
              <P color={COLORS.WHITE}>100 product added</P>
              <ArchiveRestore size={24} color={COLORS.WHITE} />
            </View>
            <H2 color={COLORS.WHITE}>Add New Product</H2>
          </LinearGradient>
        </TouchableOpacity>
        {/* 2nd column */}
        <View style={styles.RightNavigation}>
          {/* 1st child */}
          <TouchableOpacity
            style={styles.upper}
            onPress={() => navigation.navigate('DeleteProductScreen')}
          >
            <ArchiveRestore size={24} color={COLORS.WHITE} />
            <H2 color={COLORS.WHITE}>Delete Product</H2>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.lower}
            onPress={() => navigation.navigate('ChnageProudctPriceScreen')}
          >
            <ArchiveRestore size={24} color={COLORS.WHITE} />
            <H2 color={COLORS.WHITE}>Change Price</H2>
          </TouchableOpacity>
          {/* 2nd child */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeNavigation: {
    width: '100%',
    height: '58%',
    flexDirection: 'row',
    gap: 16,
    marginTop: 48,
  },

  leftNavigation: {
    borderRadius: 12,
    flex: 3,
    flexDirection: 'column-reverse',
    paddingBottom: 24,
    paddingLeft: 8,
    paddingRight: 8,
  },

  leftNavigationDesc: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 16,
  },

  RightNavigation: {
    flex: 2,
    // gap between upper and lower container
    gap: 16,
  },

  upper: {
    backgroundColor: 'rgba(225, 0, 0, 0.79)',
    borderRadius: 12,
    flex: 1,
    gap: 8,
    paddingTop: 16,
    paddingHorizontal: 8,
  },
  lower: {
    backgroundColor: '#439AFF',
    borderRadius: 12,
    flex: 1,
    gap: 8,
    paddingTop: 16,
    paddingHorizontal: 8,
  },
});
