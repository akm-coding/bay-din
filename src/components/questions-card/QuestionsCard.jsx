import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

export default function QuestionsCard({question, questionNumber, onCardPress}) {
  return (
    <>
      <TouchableOpacity
        onPress={() => onCardPress && onCardPress()}
        activeOpacity={0.7}
        style={styles.questionCardContainer}>
        <View style={styles.questionNumberWrapper}>
          <Text style={styles.questionNumber}>{questionNumber}</Text>
          <Text numberOfLines={3} style={styles.question}>
            {question}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  questionCardContainer: {
    backgroundColor: 'white',
    flex: 1,
    height: moderateScale(100, 0.3),
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  questionNumberWrapper: {
    marginHorizontal: 20,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  questionNumber: {color: 'black', paddingRight: 5},
  question: {
    fontSize: 14,
    color: '#000',
    paddingLeft: 5,
  },
});
