import { CloseTab } from '@/src/components/common/CloseTab';
import { Link, Stack } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '@/src/constants/Colors';
import SignUpForm from './form';
import { globalsStyles } from '@/src/styles/globals';
import { SocialLoginButton } from '@/src/components/common/SocialLoginButton';
import AnimatedText from '@/src/components/common/animations/AnimatedText';
import { AnimatedView } from '@/src/components/common/animations/AnimatedView';
import TextAuthLink from '@/src/components/common/TextAuthLink';

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
        <AnimatedText style={[styles.title, globalsStyles.defaultTitle]} fadeType="FadeInRight">
          Criar uma conta
        </AnimatedText>

        <SignUpForm />

        <TextAuthLink href='/auth/signin/signin' text="Já tem uma conta?" textLink="Entrar" />

        <View style={styles.divider} />

        <AnimatedView style={{ width: '100%', marginTop: 10 }} fadeType="FadeInDown" delay={400}>
          <SocialLoginButton emailHref="/auth/signin/signin" />
        </AnimatedView>
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
    letterSpacing: 1.2,
    marginBottom: 50
  },
  divider: {
    borderTopColor: Colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    width: '30%',
    marginVertical: 20
  },
});
