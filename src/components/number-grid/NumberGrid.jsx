import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

export default function NumberGrid({numberList, onPressNumber}) {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => onPressNumber && onPressNumber()}
        activeOpacity={0.7}
        style={styles.numberListContainer}>
        <View style={styles.numberListWrapper}>
          <Text style={{color: '#fff'}}>{numberList}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  numberListContainer: {
    width: moderateScale(40, 0.3),
    height: moderateScale(40, 0.3),
  },
  numberListWrapper: {
    backgroundColor: '#470114',
    width: moderateScale(35, 0.3),
    height: moderateScale(35, 0.3),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});
