import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '@/src/constants/Colors';
import InputField from '@/src/components/common/form/InputField';
import { AnimatedView } from '@/src/components/common/animations/AnimatedView';
import { useValidationSchema } from '@/src/hooks/validations/useValidationSchemaRegister';
import { useAuth } from '@/src/hooks/useAuth';
import { CreateUserDataForm } from '@/src/types/authContextType';
import { Formik } from 'formik';

const SignUpForm = () => {
  const validationSchema = useValidationSchema();
  const { createUser } = useAuth();

  const onSubmit = (values: CreateUserDataForm) => {
    const { confirmPassword, ...rest } = values;

    console.log('data', rest);
    createUser(rest);
  };
  return (
    <AnimatedView
      style={styles.container}
      fadeType="FadeInDown"
      delay={500}
      duration={300}
    >
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
          confirmPassword: ''
        }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <InputField
              placeholder="Nome"
              placeholderTextColor={Colors.gray}
              onChangeText={handleChange('username')}
              value={values.username}
              error={
                touched.username && errors.username
                  ? errors.username
                  : undefined
              }
              touched={touched.username}
              autoCapitalize="none"
            />
            <InputField
              placeholder="Endereço de E-mail"
              placeholderTextColor={Colors.gray}
              onChangeText={handleChange('email')}
              value={values.email}
              error={touched.email && errors.email ? errors.email : undefined}
              touched={touched.email}
              autoCapitalize="none"
              keyboardType="email-address"
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
            <InputField
              placeholder="Confirme sua senha"
              placeholderTextColor={Colors.gray}
              secureTextEntry={true}
              onChangeText={handleChange('confirmPassword')}
              error={
                touched.confirmPassword && errors.confirmPassword
                  ? errors.confirmPassword
                  : undefined
              }
              value={values.confirmPassword}
              touched={touched.confirmPassword}
            />

            <TouchableOpacity onPress={() => handleSubmit()} style={styles.buttonForm}>
              <Text style={styles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </AnimatedView>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 5
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
