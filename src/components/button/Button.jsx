import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Fonts from '../../styles/Fonts';

export default function Button({onBtnPress, label}) {
  return (
    <TouchableOpacity
      onPress={() => onBtnPress && onBtnPress()}
      activeOpacity={0.7}
      style={styles.back}>
      <Text style={styles.backText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  back: {
    width: '100%',
    height: moderateScale(53, 0.3),
    backgroundColor: '#470114',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  backText: {color: '#fff', fontFamily: Fonts.medium, fontSize: 14},
});
