import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { ImageBackground } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/src/constants/Colors';
import { SocialLoginButton } from '@/src/components/common/SocialLoginButton';
import AnimatedText from '@/src/components/common/animations/AnimatedText';
import TextAuthLink from '@/src/components/common/TextAuthLink';

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        source={require('@/assets/images/image.png')}
        style={{ flex: 1 }}
        contentFit="cover"
      >
        <View style={styles.container}>
          <LinearGradient
            colors={[
              'transparent',
              'rgba(255, 255, 255, 0.91)',
              'rgba(255, 255, 255, 1)'
            ]}
            style={styles.background}
          >
            <View style={styles.wrapper}>
              <AnimatedText style={styles.title} fadeType="FadeInRight" delay={400} duration={300}>Shoply</AnimatedText>
              <AnimatedText style={styles.description} fadeType="FadeInRight" delay={550} duration={3}>
                Solução completa para todas as suas necessidades.
              </AnimatedText>

              <SocialLoginButton emailHref={'/auth/signup/signup'} />

              <TextAuthLink href="/auth/signin/signin" text="Já tem uma conta?" textLink="Entrar" delay={700} />
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  background: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end'
  },
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    letterSpacing: 2.4,
    marginBottom: 5
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
    letterSpacing: 1.2,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 20
  },
  loginTextSpan: {
    fontSize: 14,
    fontWeight: 'semibold',
    color: Colors.primary,
    lineHeight: 30
  },
});
