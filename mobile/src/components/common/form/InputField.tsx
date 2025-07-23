import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Colors } from '@/src/constants/Colors';

const InputField = (props: React.ComponentProps<typeof TextInput>) => {
  return (
    <TextInput
      style={styles.input}
      {...props}
    />
  );
};

export default InputField;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: Colors.white,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignSelf: 'stretch',
    borderRadius: 5,
    fontSize: 16,
    color: Colors.baseBlack
  }
});
