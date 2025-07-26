import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { CategoryProduct } from '@/src/types/dataMock';
import { Colors } from '@/src/constants/Colors';
import CategoryItem from './CategoryItem';

type Props = {
  categories: CategoryProduct[] | null;
  loading: boolean;
};

const Categories = ({ categories, loading }: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item: CategoryProduct) => item.id.toString()}
        renderItem={({ item, index }) => (
          <CategoryItem key={item.id} item={item} />
        )}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  }
});
