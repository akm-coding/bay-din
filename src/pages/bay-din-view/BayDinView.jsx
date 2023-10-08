import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from '../../components/header/Header';
import {moderateScale} from 'react-native-size-matters';
import NumberGrid from '../../components/number-grid/NumberGrid';
import {numberLists} from '../../data/data';

export default function BayDinView({route, navigation}) {
  const {question, title} = route.params;
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#470114',
          height: moderateScale(50, 0.3),
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <MaterialIcons name="arrow-back" color="white" size={24} />
        </TouchableOpacity>
        <Text
          style={{
            color: '#fff',
            paddingLeft: 30,
          }}>
          {title}
        </Text>
      </View>
      <View style={{flex: 1, marginHorizontal: 20, marginTop: 20}}>
        <Header />
        <View style={{flex: 1, marginTop: 20}}>
          <Text style={{color: '#000', paddingLeft: 10}}>
            {question?.questionName}
          </Text>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 20}}
          numColumns={8}
          data={numberLists}
          renderItem={({item}) => {
            return (
              <NumberGrid
                numberList={item[0]}
                onPressNumber={() => {
                  console.log('Val=>', item[0]);
                }}
              />
            );
          }}
        />
      </View>
    </>
  );
}
