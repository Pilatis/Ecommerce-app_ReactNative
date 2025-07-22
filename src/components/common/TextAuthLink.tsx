import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link, Href } from 'expo-router';
import { globalsStyles } from '@/src/styles/globals';
import { Colors } from '@/src/constants/Colors';
import { AnimatedView } from './animations/AnimatedView';
import { AnimatedViewComponentType } from '@/src/types/animatedComponent';

type TextAuthLinkProps = {
  href: Href;
  text: string;
  textLink: string;
} & AnimatedViewComponentType;

const TextAuthLink = ({ href, text, textLink, ...props }: TextAuthLinkProps) => {
  return (
    <AnimatedView style={styles.container} {...props}>
      <Text
        style={[
          globalsStyles.textDescription,
          { lineHeight: 30, alignItems: 'center', gap: 3 }
        ]}
      >
        {text}
      </Text>

      <Link href={href} asChild>
        <TouchableOpacity>
          <Text style={styles.textSpan}>{textLink}</Text>
        </TouchableOpacity>
      </Link>
    </AnimatedView>
  );
};

export default TextAuthLink;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    gap: 1
  },
  textSpan: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: 'semibold',
    lineHeight: 30,
    marginLeft: 3
  }
});
