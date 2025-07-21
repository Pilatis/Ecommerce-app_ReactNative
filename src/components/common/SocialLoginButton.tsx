import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AnimatedView } from './animations/AnimatedView';
import { Href, Link } from 'expo-router';
import Ionicons from '@react-native-vector-icons/ionicons';
import { Colors } from '@/src/constants/Colors';

export const SocialLoginButton = ({ emailHref }: { emailHref: Href }) => {
  return (
    <AnimatedView
      style={styles.registerWrapper}
      fadeType="FadeInDown"
      delay={600}
      duration={300}
    >
      <Link href={emailHref} asChild>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="mail-outline" size={20} color={Colors.baseBlack} />
          <Text style={styles.buttonText}>Continue com Email</Text>
        </TouchableOpacity>
      </Link>
    </AnimatedView>
  );
};

const styles = StyleSheet.create({
  registerWrapper: {
    alignSelf: 'stretch'
  },
  button: {
    flexDirection: 'row',
    padding: 18,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    gap: 5
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'semibold',
    color: Colors.baseBlack
  }
});
