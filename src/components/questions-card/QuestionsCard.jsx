import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import Fonts from '../../styles/Fonts';

export default function QuestionsCard({question, questionNumber, onCardPress}) {
  return (
    <TouchableOpacity
      onPress={() => onCardPress && onCardPress()}
      activeOpacity={0.7}
      style={{
        backgroundColor: 'white',
        width: '100%',
        height: moderateScale(100, 0.3),
        borderRadius: 20,
        marginTop: 20,
        justifyContent: 'center',
      }}>
      <View
        style={{
          marginHorizontal: 20,
          flexDirection: 'row',
          flex: 1,
          alignItems: 'center',
        }}>
        <Text style={{color: 'black'}}>{questionNumber}</Text>
        <Text
          style={{
            paddingLeft: 30,
            fontSize: 16,
            color: '#000',
          }}>
          {question}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
