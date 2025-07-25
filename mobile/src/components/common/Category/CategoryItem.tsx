import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Colors } from '@/src/constants/Colors';
import { CategoryType } from '@/src/types/dataMock';

type Props = {
  item: CategoryType;
};

const CategoryItem = ({ item }: Props) => {
  return (
    <TouchableOpacity>
      <View style={styles.itemBox}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  itemBox: {
    alignItems: 'center',
    flexDirection: 'column',
    marginVertical: 10,
    marginLeft: 20
  },
  itemImage: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: Colors.lightGray
  },
  itemText: {
    fontSize: 16,
    fontWeight: 'semibold',
    letterSpacing: 0.6
  }
});
