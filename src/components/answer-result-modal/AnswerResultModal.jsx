import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {moderateScale} from 'react-native-size-matters';
import Button from '../button/Button';
import Fonts from '../../styles/Fonts';

export default function AnswerResultModal({
  isOpen,
  onBackdropPress,
  onButtonPress,
  label,
}) {
  return (
    <Modal
      isVisible={isOpen}
      onBackdropPress={() => onBackdropPress && onBackdropPress()}>
      <View style={styles.textWrapper}>
        <Text style={styles.answer}>အဖြေ</Text>
        <Text style={styles.label}>{label}</Text>
        <Button onBtnPress={() => onButtonPress && onButtonPress()} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    width: '100%',
    height: moderateScale(200, 0.3),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  answer: {color: '#000', fontFamily: Fonts.regular, fontSize: 14},
  label: {
    color: '#000',
    fontFamily: Fonts.bold,
    fontSize: 16,
    textAlign: 'center',
  },
});
