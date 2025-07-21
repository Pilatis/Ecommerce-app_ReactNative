import { CloseTab } from '@/src/components/common/CloseTab';
import { Link, Stack } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '@/src/constants/Colors';
import { SignUpForm } from './form';
import { globalsStyles } from '@/src/styles/globals';

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
        <Text style={[styles.title, globalsStyles.defaultTitle]}>Criar uma conta</Text>
        <SignUpForm />
        

<View></View>
        <Text style={[globalsStyles.textDescription, { lineHeight: 30, alignItems: 'center', gap: 3 }]}>
            Já tem uma conta?
            <Link href={'/auth/signin/signin'}>
            <TouchableOpacity>
              <Text>Entrar</Text>
            </TouchableOpacity>
            </Link>
        </Text>
        <View style={styles.divider} />
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
   lineHeight: 30
  },
    divider: {
    borderTopColor: Colors.gray,
    borderTopWidth: StyleSheet.hairlineWidth,
    width: '30%',
    marginVertical: 30
  }
});
