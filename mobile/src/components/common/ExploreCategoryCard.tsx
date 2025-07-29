import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CategoryType } from '@/src/types/dataMock';
import { Colors } from '@/src/constants/Colors';
import { AnimatedView } from './animations/AnimatedView';
import { Link } from 'expo-router';

type Props = {
  category: CategoryType;
  index: number;
};

const ExploreCategoryCard = ({ category, index }: Props) => {
  return (
    <Link
      href={{
        pathname: '/category-products/[category]',
        params: { category: category.name }
      }}
      asChild
    >
      <TouchableOpacity>
        <AnimatedView
          fadeType="FadeInDown"
          delay={300 + index + 100}
          style={styles.categoryContainer}
        >
          <Text style={styles.categoryTitle}>{category.name}</Text>
          <Image
            source={{ uri: category.image }}
            style={styles.categoryImage}
          />
        </AnimatedView>
      </TouchableOpacity>
    </Link>
  );
};

export default ExploreCategoryCard;

const styles = StyleSheet.create({
  categoryContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: Colors.extraLightGray,
    borderRadius: 10,
    padding: 10
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'semibold',
    letterSpacing: 0.6
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 10
  }
});
