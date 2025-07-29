import * as yup from 'yup';

export const useValidationSchema = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required('Email é obrigatório')
      .email('Digite um email válido'),

    password: yup
      .string()
      .required('Senha é obrigatória')
      .matches(/[A-Z]/g, 'A senha deve conter pelo menos uma letra maiúscula')
      .matches(/[0-9]/g, 'A senha deve conter pelo meno um número')
      .matches(
        /[!@#$%&*()?:{}|<>]/g,
        'A senha deve conter pelo menos um simbolo'
      )
      .min(6, 'A senha deve conter no mínimo 6 caracters')
  });

  return schema;
};
