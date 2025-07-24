import { StyleSheet, View, Text } from 'react-native';
import { Link } from 'expo-router';

type Props = {};

export default function HomeScreen(props: Props) {
  return (
    <View style={styles.container}>
      <Text>Home Screen - back</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
