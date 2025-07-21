import React from 'react';
import { StyleSheet, View } from 'react-native';
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
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 5
  }
});
