import React, { useRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ViewToken
} from 'react-native';
import Pagination from './Pagination';

type Props = {
  imageList: string[];
};

const width = Dimensions.get('screen').width;

const ImageSlider = ({ imageList }: Props) => {
  const [paginationIndex, setPaginationIndex] = useState<number>(0);

  const onViewableItemsChanged = ({
    viewableItems
  }: {
    viewableItems: ViewToken[];
  }) => {
    if (
      viewableItems[0].index !== undefined &&
      viewableItems[0].index !== null
    ) {
      setPaginationIndex(viewableItems[0].index % imageList.length);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50
  };

  const viewabilityConfigCallbackPairs = useRef([
    { viewabilityConfig, onViewableItemsChanged }
  ]);
  return (
    <View>
      <FlatList
        data={imageList}
        renderItem={({ item }: { item: string }) => (
          <View style={styles.imageList}>
            <Image source={{ uri: item }} style={styles.image} />
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        scrollEventThrottle={16}
        pagingEnabled
      />
      <Pagination items={imageList} paginationIndex={paginationIndex} />
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  imageList: {
    width: width,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 10
  }
});
