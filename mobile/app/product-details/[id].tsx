import React, { useEffect, useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import useProducts from '@/src/hooks/useProducts';
import ImageSlider from '@/src/components/common/ProductDetails/ImageSlider';
import HeaderProductDetails from '@/src/components/common/ProductDetails/HeaderProductDetails';
import ProductVariation from '@/src/components/common/ProductDetails/ProductVariation';
import StatusHandler from '@/src/components/common/StatusHandler';
import AnimatedText from '@/src/components/common/animations/AnimatedText';
import { ProductType } from '@/src/types/dataMock';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/src/constants/Colors';
import FooterProductDetails from '@/src/components/common/ProductDetails/FooterProductDetails';
import useCart from '@/src/hooks/useCart';
import Toast from 'react-native-toast-message';

type Props = {};

const ProductDetails = (props: Props) => {
  const { id, source } = useLocalSearchParams<{ id: string; source: string }>();
  const router = useRouter();
  const { getProductDetails, loadingProductDetail, error } = useProducts();
  const {
    getCartItems,
    postCartItem,
    cartItems,
    loading,
    error: errorCart
  } = useCart();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<string>('');

  const handleProductType = source === 'sale' ? 'saleProducts' : 'products';

  const onRemoveCartItem = () => {};

  const onAddToCart = async () => {
    if (
      !product ||
      !selectedColor ||
      product.category.name === 'Clothes' ||
      (product.category.name === 'Shoes' && !selectedSize)
    ) {
      Toast.show({
        type: 'info',
        text1: 'Selecione cor e tamanho antes de adicionar ao carrinho.'
      });
      return;
    }

    const newItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      color: selectedColor,
      size: selectedSize,
      image: product.images[0]
    };

    const response = await postCartItem(newItem);

    if (response === 'success') {
      Toast.show({
        type: 'success',
        text1: 'Item Adicionado no carrinho com sucesso'
      });
    }
  };

  const onBuyNow = () => {
    if (!product) return;

    if (
      !selectedColor
    ) {
      Toast.show({
        type: 'info',
        text1: 'Selecione cor e tamanho antes de continuar'
      });
      return;
    }

    //onAddToCart();
    router.push({
      pathname: '/checkout/[id]',
      params: {
        id: product.id,
        source,
        color: selectedColor,
        size: selectedSize
      }

    })
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProductDetails(handleProductType, Number(id));

      console.log(response);

      setProduct(response);
    };

    fetchData();
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Produto',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons
                name="cart-outline"
                size={24}
                color={Colors.baseBlack}
              />
            </TouchableOpacity>
          )
        }}
      />
      <ScrollView style={{ marginBottom: 90 }}>
        <View style={styles.container}>
          <StatusHandler
            loading={loadingProductDetail}
            error={error}
            empty={!product}
          >
            {product && (
              <View>
                <ImageSlider imageList={product.images} />

                <View style={styles.infosContainer}>
                  <HeaderProductDetails productDetails={product} />

                  <AnimatedText
                    fadeType="FadeInDown"
                    style={styles.description}
                  >
                    {product.description}
                  </AnimatedText>

                  <ProductVariation
                    category={product.category.name}
                    setSelectedColor={setSelectedColor}
                    setSelectedSize={setSelectedSize}
                  />
                </View>
              </View>
            )}
          </StatusHandler>
        </View>
      </ScrollView>
      <FooterProductDetails onAddToCart={onAddToCart} onBuyNow={onBuyNow} />
    </>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: 20
  },
  infosContainer: {
    paddingHorizontal: 20
  },
  description: {
    fontSize: 16,
    fontWeight: 400,
    letterSpacing: 0.6,
    lineHeight: 22
  }
});
