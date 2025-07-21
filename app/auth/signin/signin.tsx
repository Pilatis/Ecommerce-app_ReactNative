import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, router, Stack } from 'expo-router';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Colors } from '@/src/constants/Colors';
import { CloseTab } from '@/src/components/common/CloseTab';

type Props = {};

const SignInScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Entrar',
          headerShown: true,
          headerLeft: () => <CloseTab />,
          headerTitleAlign: 'center'
        }}
      />
      <View style={styles.container}>
        <Text>SignIn Screen</Text>
        <Link href={'/(tabs)'} asChild>
          <TouchableOpacity
            onPress={() => {
              (router.dismissAll(), router.push('/(tabs)'));
            }}
          >
            <Text>Go to App Home Screen</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
