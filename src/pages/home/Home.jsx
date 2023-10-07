import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Fonts from '../../styles/Fonts';
import Feather from 'react-native-vector-icons/Feather';

const Home = () => {
  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
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
      <View
        style={{
          backgroundColor: '#FFFFFF',
          marginTop: 20,
          width: '100%',
          height: moderateScale(53, 0.3),
          borderRadius: 20,
          alignSelf: 'flex-start',
          justifyContent: 'center',
          paddingLeft: 10,
        }}>
        <TextInput />
      </View>
    </View>
  );
};

export default Home;
