import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import Fonts from '../../styles/Fonts';
import Feather from 'react-native-vector-icons/Feather';
import QuestionsCard from '../../components/questions-card/QuestionsCard';
import {Questions} from '../../data/data';
import Header from '../../components/header/Header';
import {BAY_DIN_VIEW_SCREEN} from '../../constants/RouteName';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, marginHorizontal: 20}}>
      <Header />
      <View
        style={{
          backgroundColor: '#FFFFFF',
          marginTop: 20,
          width: '100%',
          height: moderateScale(53, 0.3),
          borderRadius: 20,
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingLeft: 10,
          paddingRight: 10,
        }}>
        <TextInput
          placeholder="သိလိုသော မေးခွန်းအား ရှာဖွေပါ..."
          placeholderTextColor="#e8ebe9"
          style={{
            flex: 1,
            fontFamily: Fonts.regular,
            fontSize: 14,
          }}
        />
        <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 30}}
        data={Questions}
        style={{marginTop: 30}}
        renderItem={({item}) => {
          return (
            <QuestionsCard
              key={item?.questionNo}
              questionNumber={item?.questionNo}
              question={item?.questionName}
              onCardPress={() =>
                navigation.navigate(BAY_DIN_VIEW_SCREEN, {
                  question: item,
                  title: 'ဗေဒင်',
                })
              }
            />
          );
        }}
      />
    </View>
  );
};

export default Home;
