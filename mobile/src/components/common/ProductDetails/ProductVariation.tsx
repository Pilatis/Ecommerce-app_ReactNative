import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AnimatedView } from '../animations/AnimatedView';
import { Colors } from '@/src/constants/Colors';

type Props = {};

const ProductVariation = (props: Props) => {
  const categoriesWithSizes = {};

  return (
    <AnimatedView fadeType="FadeInDown">
      <View style={styles.productVariationContainer}>
        <View style={styles.productVariationType}>
          <Text style={styles.productVariationTitle}>Color</Text>
          <View style={styles.productVariationValue}>
           <View style={styles.productVariationColorValue} />
           <View style={styles.productVariationColorValue} />
           <View style={styles.productVariationColorValue} />
           <View style={styles.productVariationColorValue} />
          </View>
        </View>
        <View style={styles.productVariationType}>
          <Text style={styles.productVariationTitle}>Size</Text>
        </View>
      </View>
    </AnimatedView>
  );
};

export default ProductVariation;

const styles = StyleSheet.create({
  productVariationContainer: {
    flexDirection: 'row',
    marginTop: 20,
    flexWrap: 'wrap'
  },
  productVariationType: {
    width: '50%',
    gap: 5,
    marginBottom: 10
  },

  productVariationTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: Colors.baseBlack
  },
  productVariationValue: {
   flexDirection: 'row',
   alignItems: 'center',
   gap: 5,
  },
  productVariationColorValue: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.extraLightGray
  }
});
