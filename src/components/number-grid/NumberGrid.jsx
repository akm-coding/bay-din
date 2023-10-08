import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';

export default function NumberGrid({numberList, onPressNumber}) {
  return (
    <TouchableOpacity
      onPress={() => onPressNumber && onPressNumber()}
      activeOpacity={0.7}
      style={{
        width: moderateScale(40, 0.3),
        height: moderateScale(40, 0.3),
      }}>
      <View
        style={{
          backgroundColor: '#470114',
          width: moderateScale(35, 0.3),
          height: moderateScale(35, 0.3),
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 20,
          marginLeft: 10,
        }}>
        <Text style={{color: '#fff'}}>{numberList}</Text>
      </View>
    </TouchableOpacity>
  );
}
