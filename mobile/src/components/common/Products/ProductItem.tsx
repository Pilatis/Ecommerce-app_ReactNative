import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React from 'react';
import { ProductType } from '@/src/types/dataMock';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/src/constants/Colors';
import { AnimatedView } from '../animations/AnimatedView';

type Props = {
  item: ProductType;
  productIndex: number;
};

const width = Dimensions.get('window').width - 40;

const ProductItem = ({ item, productIndex: index }: Props) => {
  return (
    <AnimatedView
      style={styles.container}
      fadeType="FadeInDown"
      delay={300 + index * 100}
      duration={500}
    >
      <Image source={{ uri: item.images[0] }} style={styles.productImage} />
      <TouchableOpacity style={styles.bookmarkButton}>
        <Ionicons name="heart-outline" size={22} color={Colors.baseBlack} />
      </TouchableOpacity>
      <View style={styles.productInfo}>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.ratingBox}>
          <Ionicons name="star" size={20} color="#D4AF37" />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
      </View>
      <Text style={styles.productTitle}>{item.title}</Text>
    </AnimatedView>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 10,
    flexDirection: 'column',
    gap: 5
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 10
  },
  bookmarkButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 5,
    borderRadius: 30
  },
  productTitle: {
    fontSize: 14,
    fontWeight: 'semibold',
    color: Colors.baseBlack,
    letterSpacing: 1.1
  },
  productInfo: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 8
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary
  },
  ratingBox: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5
  },
  rating: {
    fontSize: 14,
    color: Colors.gray
  }
});
