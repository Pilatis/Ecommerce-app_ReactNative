import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link, Stack } from 'expo-router';
import { ImageBackground } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/src/constants/Colors';
import Ionicons from '@react-native-vector-icons/ionicons';
import Animated, { FadeInDown, FadeInRight } from 'react-native-reanimated';
import { globalsStyles } from '@/src/styles/globals';

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
              <Animated.Text style={styles.title} entering={FadeInRight.delay(400).duration(300).springify()}>Shoply</Animated.Text>
              <Animated.Text style={styles.description} entering={FadeInRight.delay(550).duration(300).springify()}>
                Solução completa para todas as suas necessidades.
              </Animated.Text>

              <Animated.View style={styles.registerWrapper} entering={FadeInDown.delay(300).duration(500)}>
                <Link href={'/auth/signin/signin'} asChild>
                  <TouchableOpacity style={styles.button}>
                  <Ionicons
                    name="mail-outline"
                    size={20}
                    color={Colors.baseBlack}
                    />
                    <Text style={styles.buttonText}>Continue com Email</Text>
                  </TouchableOpacity>
                    </Link>
              </Animated.View>

              <Animated.View style={styles.loginWrapper} entering={FadeInRight.delay(700).duration(300)}>
                <Text style={[globalsStyles.textDescription, { lineHeight: 30 }]}>Não tem uma conta? </Text>
                <Link href={'/auth/signup/signup'} asChild>
                  <TouchableOpacity>
                    <Text style={styles.loginTextSpan}>Cadastrar-se</Text>
                  </TouchableOpacity>
                </Link>
              </Animated.View>
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
  registerWrapper: {
    alignSelf: 'stretch'
  },
  loginWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    gap: 1
  },
  loginTextSpan: {
    fontSize: 14,
    fontWeight: 'semibold',
    color: Colors.primary,
    lineHeight: 30
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
