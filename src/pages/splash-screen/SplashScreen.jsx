import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {HOME_SCREEN} from '../../constants/RouteName';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(HOME_SCREEN, {
        params: {},
      });
    }, 1000);
  });

  return (
    <View style={{flex: 1}}>
      <Image
        style={{width: '100%', height: '100%'}}
        source={require('../../assets/images/landing-screen.png')}
      />
    </View>
  );
};

export default SplashScreen;
