import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/src/constants/Colors';
import InputField from '@/src/components/common/form/InputField';

export const SignUpForm = () => {
  return (
    <View style={styles.container}>
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
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
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
    marginBottom: 20,
    marginTop: 30
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'semibold'
  }
});
