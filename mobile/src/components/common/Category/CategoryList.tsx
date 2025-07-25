import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CategoryProduct } from '@/src/types/dataMock';
import { Colors } from '@/src/constants/Colors';
import CategoryItem from './CategoryItem';

type Props = {
  categories: CategoryProduct[] | null;
  loading: boolean;
};

const Categories = ({ categories, loading }: Props) => {
  return (
    <View>

    <View style={styles.titleHeader}>
      <Text style={styles.title}>For you</Text>
      <TouchableOpacity>
        <Text style={styles.titleButton}>See all</Text>
      </TouchableOpacity>
    </View>

   <FlatList data={categories} horizontal showsHorizontalScrollIndicator={false} keyExtractor={(item: CategoryProduct) => item.id.toString()} renderItem={({ item, index }) => (
    <CategoryItem key={item.id} item={item} /> 
   )} />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  titleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'semibold',
    letterSpacing: 0.6,
    color: Colors.baseBlack
  },
  titleButton: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.6,
    color: Colors.baseBlack
  },
});
