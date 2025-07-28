import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '@/src/constants/Colors';

type Props = {
  items: string[];
  paginationIndex: number;
};

const Pagination = ({ items, paginationIndex }: Props) => {
  return (
    <View style={styles.container}>
      {items.map((item: string, index: number) => (
        <View
          key={index}
          style={[
            styles.pagination,
            {
              backgroundColor:
                paginationIndex === index ? Colors.primary : '#ccc'
            }
          ]}
        />
      ))}

      <View style={styles.paginationNumberContainer}>
        <View style={styles.paginationNumberBox}>
        <Text style={styles.paginationText}>{paginationIndex + 1}/{items.length}</Text>
        </View>
      </View>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  pagination: {
    width: 30,
    height: 4,
    margin: 3,
    borderRadius: 5
  },
  paginationNumberContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingRight: 20
  },
  paginationNumberBox: {
   backgroundColor: Colors.extraLightGray,
   paddingHorizontal: 8,
   paddingVertical: 2,
   borderRadius: 10
  },
  paginationText: {
    color: Colors.primary,
    fontSize: 13
  }

});
