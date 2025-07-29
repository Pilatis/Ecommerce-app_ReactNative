import { useEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList
} from 'react-native';
import { Stack } from 'expo-router';
import useCategory from '@/src/hooks/useCategory';
import { CategoryType } from '@/src/types/dataMock';
import ExploreCategoryCard from '@/src/components/common/ExploreCategoryCard';
import StatusHandler from '@/src/components/common/StatusHandler';

export default function Explore() {
  const { getCategories, categories, loading, error } = useCategory();

  useEffect(() => {
    if (categories?.length === 0) {
      getCategories();
    }
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Explore',
          headerTitleAlign: 'center'
        }}
      />

      <StatusHandler
        loading={loading}
        error={error}
        empty={!categories?.length}
      >
        <View style={styles.container}>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({
              item,
              index
            }: {
              item: CategoryType;
              index: number;
            }) => <ExploreCategoryCard category={item} index={index} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.categoryList}
          />
        </View>
      </StatusHandler>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 10
  },
  categoryList: {
    gap: 20
  }
});
