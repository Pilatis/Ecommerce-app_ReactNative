import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/src/constants/Colors';
import { ProductType } from '@/src/types/dataMock';
import { Ionicons } from '@expo/vector-icons';
import { AnimatedView } from '../animations/AnimatedView';

type Props = {
  productDetails: ProductType;
};

const HeaderProductDetails = ({ productDetails }: Props) => {
  return (
    <AnimatedView fadeType="FadeInDown">
      <View style={styles.ratingBox}>
        <View style={styles.ratingBox}>
          <Ionicons name="star" size={20} color={Colors.star} />
          <Text style={styles.rating}>
            {productDetails.rating}
            <Text> ({productDetails?.numberReviews})</Text>
          </Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="heart-outline" size={20} color={Colors.baseBlack} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{productDetails?.title}</Text>

      <View style={styles.priceBox}>
        <Text style={styles.price}>${productDetails.price}</Text>
        {productDetails.discount && (
          <View style={styles.discountContainer}>
            <View style={styles.discountBox}>
              <Text style={styles.priceDiscount}>
                {productDetails?.discount}% Off
              </Text>
            </View>

            <Text style={styles.oldPrice}>$26</Text>
          </View>
        )}
      </View>
    </AnimatedView>
  );
};

export default HeaderProductDetails;

const styles = StyleSheet.create({
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  rating: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: '400',
    color: Colors.gray
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: Colors.baseBlack,
    letterSpacing: 0.6,
    lineHeight: 24
  },
  priceBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    gap: 5
  },
  price: {
    fontSize: 18,
    fontWeight: 'semibold',
    color: Colors.baseBlack
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5
  },
  discountBox: {
    paddingVertical: 4,
    paddingHorizontal: 5,
    backgroundColor: Colors.extraLightGray,
    borderRadius: 5
  },
  priceDiscount: {
    fontSize: 13,
    color: Colors.primary
  },
  oldPrice: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.gray,
    textDecorationLine: 'line-through'
  }
});
