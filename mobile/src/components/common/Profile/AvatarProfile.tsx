import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {};

const AvatarProfile = (props: Props) => {
  return (
    <View style={styles.avatarProfile}>
      <Image
        source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=male' }}
        style={styles.avatarImage}
      />
      <Text style={styles.avatarName}>Lucas</Text>
    </View>
  );
};

export default AvatarProfile;

const styles = StyleSheet.create({
  avatarProfile: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
    gap: 10
  },
  avatarImage: {
    width: 70,
    height: 70,
    borderRadius: 40
  },
  avatarName: {
    fontSize: 18,
    fontWeight: 'semibold',
    marginBottom: 10
  }
});
