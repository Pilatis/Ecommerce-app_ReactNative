import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import useProducts from '@/src/hooks/useProducts';
import ImageSlider from '@/src/components/common/ProductDetails/ImageSlider';
import HeaderProductDetails from '@/src/components/common/ProductDetails/HeaderProductDetails';
import ProductVariation from '@/src/components/common/ProductDetails/ProductVariation';
import StatusHandler from '@/src/components/common/StatusHandler';
import AnimatedText from '@/src/components/common/animations/AnimatedText';
import { ProductType } from '@/src/types/dataMock';
import { useHeaderHeight } from '@react-navigation/elements';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/src/constants/Colors';
import FooterProductDetails from '@/src/components/common/ProductDetails/FooterProductDetails';

type Props = {};

const ProductDetails = (props: Props) => {
  const { id, source } = useLocalSearchParams<{ id: string; source: string }>();
  const headerHeight = useHeaderHeight();
  const { getProductDetails, loadingProductDetail, error } = useProducts();
  const [product, setProduct] = useState<ProductType | null>(null);

  const handleProductType = source === 'sale' ? 'saleProducts' : 'products';

  useEffect(() => {
    const fetchData = async () => {
      const response = await getProductDetails(handleProductType, Number(id));

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
              <Ionicons name="cart-outline" size={24} color={Colors.baseBlack} /> 
            </TouchableOpacity>
          )
        }}
      />
      <ScrollView style={{ marginTop: headerHeight, marginBottom: 90 }}>
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

                  <ProductVariation category={product.category.name} />
                </View>
              </View>
            )}
          </StatusHandler>
        </View>
      </ScrollView>
     <FooterProductDetails />
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
  },
});
