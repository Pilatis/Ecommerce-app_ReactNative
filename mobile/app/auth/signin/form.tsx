import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AnimatedView } from '@/src/components/common/animations/AnimatedView';
import InputField from '@/src/components/common/form/InputField';
import { Colors } from '@/src/constants/Colors';
import { Formik, Form } from 'formik';
import { router } from 'expo-router';
import { useValidationSchema } from '@/src/hooks/validations/useValidationSchemaLogin';
import { LoginData } from '@/src/types/authContextType';
import { useAuth } from '@/src/hooks/useAuth';
import Toast from 'react-native-toast-message';

const SignInForm = () => {
  const validationSchema = useValidationSchema();
  const { login } = useAuth();

  const onSubmit = async (values: LoginData) => {
    console.log('Form submitted:', values);
    const formatData = {
      email: values.email,
      password: values.password
    }

    const response = await login(formatData)

    if (response === 'success') {
      Toast.show({
        type: 'success',
        text1: 'Bem vindo a Shoply'
      })
      router.push('/(tabs)')
    }
  };

  return (
    <AnimatedView
      style={styles.container}
      fadeType="FadeInDown"
      delay={300}
      duration={300}
    >
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <InputField
              placeholder="E-mail"
              placeholderTextColor={Colors.gray}
              onChangeText={handleChange('email')}
              value={values.email}
              error={touched.email && errors.email ? errors.email : undefined}
              touched={touched.email}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <InputField
              placeholder="Senha"
              placeholderTextColor={Colors.gray}
              secureTextEntry={true}
              onChangeText={handleChange('password')}
              error={
                touched.password && errors.password
                  ? errors.password
                  : undefined
              }
              value={values.password}
              touched={touched.password}
            />
            <TouchableOpacity
              onPress={() => handleSubmit()}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
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
