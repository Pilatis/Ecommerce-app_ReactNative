import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, router, Stack } from 'expo-router';
import { Colors } from '@/src/constants/Colors';
import { CloseTab } from '@/src/components/common/CloseTab';
import { globalsStyles } from '@/src/styles/globals';
import SignInForm from './form';
import TextAuthLink from '@/src/components/common/TextAuthLink';
import AnimatedText from '@/src/components/common/animations/AnimatedText';

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
        <AnimatedText
          style={[styles.title, globalsStyles.defaultTitle]}
          fadeType="FadeInRight"
        >
          Entrar
        </AnimatedText>
        <SignInForm />

        <TextAuthLink
          href={'/auth/signup/signup'}
          text="Não tem uma conta?"
          textLink="Criar conta"
        />
        <View style={styles.divider} />
      </View>
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.background
  },
  title: {
    letterSpacing: 1.2,
    marginBottom: 50
  },
  divider: {
    borderTopColor: Colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    width: '30%',
    marginVertical: 20
  }
});
