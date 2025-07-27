import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '@/src/constants/Colors';
import AvatarProfile from '@/src/components/common/Profile/AvatarProfile';
import ProfileButtons from '@/src/components/common/Profile/ProfileButtons';
import { profileItems } from '@/src/helpers/profileItems';
import { ProfileItem } from '@/src/types/userContextType';
import { AnimatedView } from '@/src/components/common/animations/AnimatedView';

type Props = {};

const Profile = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      <AnimatedView fadeType="FadeInDown">
        <AvatarProfile />
      </AnimatedView>

      <View style={styles.listButtons}>
        {profileItems.map((item: ProfileItem, index: number) => (
          <AnimatedView
            key={item.id}
            fadeType="FadeInDown"
            delay={300 + index * 100}
            style={{ width: '100%' }}
          >
            <ProfileButtons text={item.text} iconType={item.iconType} />
          </AnimatedView>
        ))}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Colors.background
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.6,
    marginVertical: 10
  },
  listButtons: {
    width: '100%',
    alignItems: 'center',
    gap: 10
  }
});
