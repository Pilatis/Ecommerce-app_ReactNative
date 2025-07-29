import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors } from '@/src/constants/Colors';

interface Props {
  placeholder: string;
  placeholderTextColor?: string;
  secureTextEntry?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  error?: string;
  touched?: boolean;
}

const InputField = ({
  placeholder,
  placeholderTextColor = Colors.gray,
  secureTextEntry = false,
  value,
  onChangeText,
  error,
  touched,
  ...props
}: Props & React.ComponentProps<typeof TextInput>) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        {...props} />
        {touched && error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '100%'
  },
  input: {
    width: '100%',
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignSelf: 'stretch',
    borderRadius: 5,
    fontSize: 16,
    color: Colors.baseBlack
  },
    errorText: {
    color: '#ec1414ff',
    fontSize: 12,
    marginTop: 5,
  },
});
