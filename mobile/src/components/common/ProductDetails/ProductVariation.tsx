import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { AnimatedView } from '../animations/AnimatedView';
import { Colors } from '@/src/constants/Colors';
import { variantColors } from '@/src/helpers/variantColors';
import { categoryNameMap } from '@/src/helpers/categoryNameMap';
import { variantSizes } from '@/src/helpers/variantSizes';

type Props = {
  category: string;
};

const ProductVariation = ({ category }: Props) => {
  const categoriesWithSizes = {};

  console.log(category);
  return (
    <AnimatedView fadeType="FadeInDown">
      <View style={styles.productVariationContainer}>
        <View style={styles.productVariationType}>
          <Text style={styles.productVariationTitle}>Color</Text>
          {/* <View style={styles.selectedColor}> */}
          <View style={styles.productVariationValue}>
            {variantColors.map((color: string, index: number) => (
              <View
                key={index}
                style={[
                  styles.productVariationColorValue,
                  { backgroundColor: color }
                ]}
              />
            ))}
          </View>
          {/* </View> */}
        </View>

        {(category === 'Clothes' || category === 'Shoes') && (
          <View style={styles.productVariationType}>
            <Text style={styles.productVariationTitle}>Size</Text>
            <View style={styles.productVariationValue}>
              {variantSizes.map((size: string, index: number) => (
                <View key={index} style={styles.productVariationSizeValue}>
                  <Text style={styles.productVariantSizeValueText}>{size}</Text>
                </View>
              ))}
            </View>
          </View>
        )}
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
    marginTop: 10,
    gap: 5
  },
  productVariationColorValue: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: Colors.extraLightGray
  },
  selectedColor: {
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: 100,
    padding: 2
  },
  productVariationSizeValue: {
    width: 50,
    height: 30,
    borderRadius: 5,
    backgroundColor: Colors.extraLightGray,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.lightGray,
    borderWidth: 1
  },
  productVariantSizeValueText: {
    fontSize: 12,
    fontWeight: 500,
    color: Colors.baseBlack
  }
});
