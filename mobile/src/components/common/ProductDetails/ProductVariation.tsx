import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { SetStateAction, useState } from 'react';
import { AnimatedView } from '../animations/AnimatedView';
import { Colors } from '@/src/constants/Colors';
import { variantColors } from '@/src/helpers/variantColors';
import { categoryNameMap } from '@/src/helpers/categoryNameMap';
import { variantSizes } from '@/src/helpers/variantSizes';

type Props = {
  category: string;
  setSelectedColor: React.Dispatch<SetStateAction<string>>;
  setSelectedSize: React.Dispatch<SetStateAction<string>>;
};

const ProductVariation = ({
  category,
  setSelectedColor,
  setSelectedSize
}: Props) => {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(null);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState<number | null>(null);
  const categoriesWithSizes = {};

  return (
    <AnimatedView fadeType="FadeInDown">
      <View style={styles.productVariationContainer}>
        <View style={styles.productVariationType}>
          <Text style={styles.productVariationTitle}>Cores</Text>

          <View style={styles.productVariationValue}>
            {variantColors.map((color: string, index: number) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedColor(color);
                  setSelectedColorIndex(index);
                }}
                style={[
                  selectedColorIndex === index ? styles.selectedColor : null,
                  { padding: selectedColorIndex === index ? 2 : 0 }
                ]}
              >
                <View
                  style={[
                    styles.productVariationColorValue,
                    { backgroundColor: color }
                  ]}
                />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {(category === 'Clothes' || category === 'Shoes') && (
          <View style={styles.productVariationType}>
            <Text style={styles.productVariationTitle}>Tamanhos</Text>
            <View style={styles.productVariationValue}>
              {variantSizes.map((size: string, index: number) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setSelectedSize(size);
                    setSelectedSizeIndex(index);
                  }}
                  style={[
                    styles.productVariationSizeValue,
                    selectedSizeIndex === index && styles.selectedSize
                  ]}
                >
                  <Text style={styles.productVariantSizeValueText}>{size}</Text>
                </TouchableOpacity>
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
    marginTop: 20
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
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
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
  selectedSize: {
    borderColor: Colors.primary,
    borderWidth: 1,
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
