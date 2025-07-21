import { CloseTab } from '@/src/components/common/CloseTab';
import { Stack } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/src/constants/Colors';
import { SignUpForm } from './form';

type Props = {};

const SignUpScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Cadastrar-se',
          headerShown: true,
          headerLeft: () => <CloseTab />,
          headerTitleAlign: 'center'
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Criar uma conta</Text>
        <SignUpForm />
      </View>
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.background
  },
  title: {
    fontSize: 24,
    fontWeight: 'semibold',
    letterSpacing: 1.2,
    color: Colors.baseBlack,
    marginBottom: 50
  }
});
