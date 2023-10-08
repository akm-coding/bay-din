import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  BAY_DIN_VIEW_SCREEN,
  HOME_SCREEN,
  SPLASH_SCREEN,
} from '../../constants/RouteName';
import {BayDinViewScreen, HomeScreen, SplashScreen} from '../../pages';
import React from 'react';

const Stack = createStackNavigator();

function RootNavigator() {
  const navigationRef = React.useRef();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={SPLASH_SCREEN}
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: ({
            index,
            current,
            next,
            layouts: {screen},
          }) => {
            const translateX = current.progress.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [screen.width, 0, 0],
            });
            const opacity = next?.progress.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [1, 0, 0],
            });
            return {cardStyle: {opacity, transform: [{translateX}]}};
          },
        }}>
        <Stack.Screen name={SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={BAY_DIN_VIEW_SCREEN} component={BayDinViewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default RootNavigator;
