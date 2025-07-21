import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/src/constants/Colors';
import InputField from '@/src/components/common/form/InputField';
import { AnimatedView } from '@/src/components/common/animations/AnimatedView';

export const SignUpForm = () => {
  return (
    <AnimatedView style={styles.container} fadeType="FadeInDown" delay={500} duration={300}>
      <InputField
        placeholder="Endereço de E-mail"
        placeholderTextColor={Colors.gray}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <InputField
        placeholder="Senha"
        placeholderTextColor={Colors.gray}
        secureTextEntry={true}
      />
      <InputField
        placeholder="Confirme sua senha"
        placeholderTextColor={Colors.gray}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.buttonForm}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 10
  },
  buttonForm: {
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 18,
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
