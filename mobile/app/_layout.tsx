import { useEffect } from 'react';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import Toast from 'react-native-toast-message';
import { useColorScheme } from '@/src/hooks/useColorScheme';
import Providers from '@/src/providers/Providers';
import { useAuth } from '@/src/hooks/useAuth';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { isAuthenticated } = useAuth();
  const user = false;
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Providers>
      <ThemeProvider value={DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          {isAuthenticated ? (
            <Stack.Screen
              name="(tabs)"
              options={{ headerShown: false, animation: 'none' }}
            />
          ) : (
            <>
              <Stack.Screen
                name="index"
                options={{ headerShown: false, animation: 'fade' }}
              />
              <Stack.Screen name="signin" options={{ presentation: 'modal' }} />
              <Stack.Screen name="signup" options={{ presentation: 'modal' }} />
              <Stack.Screen name="+not-found" />
            </>
          )}
        </Stack>
        <StatusBar style="auto" />
        <Toast />
      </ThemeProvider>
    </Providers>
  );
}
