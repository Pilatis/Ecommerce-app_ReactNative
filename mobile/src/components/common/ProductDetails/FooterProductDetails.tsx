import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Colors } from '@/src/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { AnimatedView } from '../animations/AnimatedView';

type Props = {};

const FooterProductDetails = (props: Props) => {
  return (
    <AnimatedView fadeType="FadeInDown" delay={500} duration={500} style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: Colors.white,
            borderColor: Colors.primary,
            borderWidth: 1
          }
        ]}
      >
        <Ionicons name="cart-outline" size={20} color={Colors.primary} />
        <Text style={[styles.buttonText, { color: Colors.primary }]}>
          Adicionar ao carrinho
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Comprar agora</Text>
      </TouchableOpacity>
    </AnimatedView>
  );
};

export default FooterProductDetails;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 90,
    padding: 20,
    bottom: 0,
    width: '100%',
    backgroundColor: Colors.white,
    flexDirection: 'row',
    gap: 10
  },
  button: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    borderRadius: 5,
    gap: 5,
    elevation: 5,
    shadowColor: Colors.baseBlack,
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.85
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 500,
    color: Colors.white
  }
});
