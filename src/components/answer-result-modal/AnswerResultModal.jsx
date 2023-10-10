import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {moderateScale} from 'react-native-size-matters';
import Button from '../button/Button';
import Fonts from '../../styles/Fonts';

export default function AnswerResultModal({
  isOpen,
  onBackdropPress,
  onBackBtnPress,
  onRetryBtnPress,
  label,
}) {
  return (
    <Modal
      isVisible={isOpen}
      onBackdropPress={() => onBackdropPress && onBackdropPress()}>
      <View style={styles.mainContainer}>
        <View style={styles.textWrapper}>
          <Text style={styles.answer}>အဖြေ</Text>
          <Text style={styles.label}>{label}</Text>
        </View>
        <View style={styles.btnContainer}>
          <View style={{flex: 0.9}}>
            <Button
              label={'ပြန်ကြည့်မယ်'}
              onBtnPress={() => onRetryBtnPress && onRetryBtnPress()}
            />
          </View>
          <View style={{flex: 0.1}} />
          <View style={{flex: 0.9}}>
            <Button
              label={'နောက်သို့'}
              onBtnPress={() => onBackBtnPress && onBackBtnPress()}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    height: moderateScale(200, 0.3),
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    flex: 1,
  },
  answer: {color: '#000', fontFamily: Fonts.regular, fontSize: 14},
  label: {
    color: '#000',
    fontFamily: Fonts.bold,
    fontSize: 16,
    textAlign: 'center',
  },
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
  },
});
