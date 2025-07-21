import { CloseTab } from '@/src/components/common/CloseTab';
import { Link, Stack } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '@/src/constants/Colors';
import { SignUpForm } from './form';
import { globalsStyles } from '@/src/styles/globals';
import { SocialLoginButton } from '@/src/components/common/SocialLoginButton';

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
        <Text style={[styles.title, globalsStyles.defaultTitle]}>
          Criar uma conta
        </Text>

        <SignUpForm />

        <View style={styles.loginWrapper}>
          <Text
            style={[
              globalsStyles.textDescription,
              { lineHeight: 30, alignItems: 'center', gap: 3 }
            ]}
          >
            Já tem uma conta?
          </Text>
          <Link href={'/auth/signin/signin'}>
            <TouchableOpacity>
              <Text style={styles.textSpan}>Entrar</Text>
            </TouchableOpacity>
          </Link>
        </View>
        <View style={styles.divider} />

        <View style={{ width: '100%', marginTop: 10 }}>
          <SocialLoginButton emailHref="/auth/signin/signin" />
        </View>
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
  textSpan: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: 'semibold',
    lineHeight: 30,
    marginLeft: 3
  },
  divider: {
    borderTopColor: Colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    width: '30%',
    marginVertical: 20
  },
  loginWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    gap: 1
  }
});
