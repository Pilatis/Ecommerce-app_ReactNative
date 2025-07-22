import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AnimatedView } from '@/src/components/common/animations/AnimatedView';
import InputField from '@/src/components/common/form/InputField';
import { Colors } from '@/src/constants/Colors';
import { router } from 'expo-router';

const SignInForm = () => {
  const onSubmit = () => {
    router.push('/(tabs)')
  }

  return (
    <AnimatedView
      style={styles.container}
      fadeType="FadeInDown"
      delay={300}
      duration={300}
    >
      <InputField placeholder="E-mail" placeholderTextColor={Colors.gray} />
      <InputField
        placeholder="Senha"
        placeholderTextColor={Colors.gray}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={onSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </AnimatedView>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 10
  },
  button: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 18,
    paddingVertical: 14,
    alignSelf: 'stretch',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'semibold'
  }
});
