import React, { useEffect } from 'react';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import Routes from '@routes/Routes';
SplashScreen.preventAutoHideAsync();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    'Gabarito-Black': require('./src/assets/fonts/Gabarito-Black.ttf'),
    'Gabarito-Bold': require('./src/assets/fonts/Gabarito-Bold.ttf'),
    'Gabarito-ExtraBold': require('./src/assets/fonts/Gabarito-ExtraBold.ttf'),
    'Gabarito-Medium': require('./src/assets/fonts/Gabarito-Medium.ttf'),
    'Gabarito-Regular': require('./src/assets/fonts/Gabarito-Regular.ttf'),
    'Gabarito-SemiBold': require('./src/assets/fonts/Gabarito-SemiBold.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  let AppEntryPoint = Routes;

  // Render Storybook if storybookEnabled is true
  AppEntryPoint = require('./.storybook').default;

  // Change from Routes to AppEntryPoint to test storybook
  return <Routes />;
}
