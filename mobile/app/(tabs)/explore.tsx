import { useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  FlatList
} from 'react-native';
import { Stack } from 'expo-router';
import AnimatedText from '@/src/components/common/animations/AnimatedText';
import useCategory from '@/src/hooks/useCategory';
import { CategoryType } from '@/src/types/dataMock';
import ExploreCategoryCard from '@/src/components/common/ExploreCategoryCard';
import { Colors } from '@/src/constants/Colors';
import { globalsStyles } from '@/src/styles/globals';

export default function Explore() {
  const { getCategories, categories, loading } = useCategory();

  useEffect(() => {
    getCategories();
  }, []);

  if (loading) {
    return (
      <View>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        <AnimatedText
          fadeType="FadeInDown"
          style={[
            globalsStyles.headerTitle,
            { textAlign: 'center', marginBottom: 10 }
          ]}
        >
          Explore
        </AnimatedText>
        {categories && !loading ? (
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
        ) : (
          <Text>Não foi possível exibir as categorias.</Text>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 35,
    justifyContent: 'center',
    paddingBottom: 30
  },
  categoryList: {
    gap: 20
  }
});
