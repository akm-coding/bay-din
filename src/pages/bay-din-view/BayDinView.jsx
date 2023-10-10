import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {moderateScale} from 'react-native-size-matters';
import NumberGrid from '../../components/number-grid/NumberGrid';
import {Answers, numberLists} from '../../data/data';
import AnswerResultModal from '../../components/answer-result-modal/AnswerResultModal';
import Fonts from '../../styles/Fonts';

function mm2en(num) {
  var nums = {
    '၀': '0',
    '၁': 1,
    '၂': 2,
    '၃': 3,
    '၄': 4,
    '၅': 5,
    '၆': 6,
    '၇': 7,
    '၈': 8,
    '၉': 9,
  };
  return num.replace(/([၀-၉])/g, function (s, key) {
    return nums[key] || s;
  });
}

export default function BayDinView({route, navigation}) {
  const [isOpenedModal, setIsOpenedModal] = useState(false);
  const [result, setResult] = useState(null);
  const {question, title} = route.params;
  return (
    <>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" color="white" size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.questionNameContainer}>
        <View style={{marginTop: 20}}>
          <Text
            style={{
              color: '#000',
              paddingLeft: 10,
              fontFamily: Fonts.medium,
              fontSize: 18,
            }}>
            {question?.questionName}
          </Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}
          numColumns={9}
          data={numberLists}
          renderItem={({item}) => {
            return (
              <NumberGrid
                numberList={item[0]}
                onPressNumber={() => {
                  setIsOpenedModal(true);
                  const result = Answers.find(
                    obj =>
                      obj.questionNo == question.questionNo &&
                      obj.answerNo == mm2en(item),
                  );
                  setResult(result);
                }}
              />
            );
          }}
        />
      </View>
      <AnswerResultModal
        label={result?.answerResult}
        isOpen={isOpenedModal}
        onBackdropPress={() => setIsOpenedModal(false)}
        onRetryBtnPress={() => setIsOpenedModal(false)}
        onBackBtnPress={() => {
          setIsOpenedModal(false);
          setTimeout(() => {
            navigation.goBack();
          }, 1000);
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: '#470114',
    height: moderateScale(50, 0.3),
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    marginLeft: 30,
  },
  questionNameContainer: {flex: 1, marginHorizontal: 20, marginTop: 20},
});
