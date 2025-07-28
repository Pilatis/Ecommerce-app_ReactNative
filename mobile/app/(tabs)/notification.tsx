import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Stack } from 'expo-router'
import { globalsStyles } from '@/src/styles/globals'
import AnimatedText from '@/src/components/common/animations/AnimatedText'

type Props = {}

const Notification = (props: Props) => {
  return (
    <>
    <Stack.Screen options={{ headerShown: false }} />
    <View style={styles.container}>
      <AnimatedText fadeType="FadeInDown" style={globalsStyles.headerTitle}>Notification</AnimatedText>
      {/* <FlatList /> */}
    </View>
    </>
  )
}

export default Notification

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    notificationList: {
        justifyContent: 'center',
        gap: 5
    }
})