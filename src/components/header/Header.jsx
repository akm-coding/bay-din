import {View, Text, Image} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Fonts from '../../styles/Fonts';

export default function Header() {
  return (
    <View style={{alignItems: 'center', marginTop: 30}}>
      <Image
        style={{
          width: moderateScale(80, 0.3),
          height: moderateScale(80, 0.3),
          borderRadius: 50,
        }}
        source={require('../../assets/images/mintheinkha_logo.png')}
      />
      <Text
        style={{
          color: '#000000',
          fontFamily: Fonts.bold,
          fontSize: 20,
          paddingTop: 20,
        }}>
        လက်ထောက်ဗေဒင်
      </Text>
    </View>
  );
}
