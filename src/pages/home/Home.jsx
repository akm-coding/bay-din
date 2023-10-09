import {
  View,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import QuestionsCard from '../../components/questions-card/QuestionsCard';
import {Questions} from '../../data/data';
import {BAY_DIN_VIEW_SCREEN} from '../../constants/RouteName';
import {moderateScale} from 'react-native-size-matters';
import Fonts from '../../styles/Fonts';
import Feather from 'react-native-vector-icons/Feather';

const HeaderComponent = ({onChangeSearchText, value}) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.image}
        source={require('../../assets/images/mintheinkha_logo.png')}
      />
      <Text style={styles.latHtaukBayDinTxt}>လက်ထောက်ဗေဒင်</Text>
      <View style={styles.searchContainer}>
        <View style={styles.textInputWrapper}>
          <TextInput
            value={value}
            placeholder="သိလိုသော မေးခွန်းအား ရှာဖွေပါ..."
            placeholderTextColor="#e8ebe9"
            style={styles.textInput}
            onChangeText={_value => {
              onChangeSearchText(_value);
            }}
          />
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.icon}>
          <Feather name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Home = ({navigation}) => {
  const [filteredQuestion, setFilteredQuestion] = useState(Questions);
  const [searchTxt, setSearchTxt] = useState('');

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (!searchTxt) {
        setFilteredQuestion(Questions);
      } else {
        setFilteredQuestion(
          filteredQuestion.filter(q => q.questionName.includes(searchTxt)),
        );
      }
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchTxt]);

  return (
    <View style={{flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={
          <HeaderComponent
            value={searchTxt}
            onChangeSearchText={value => {
              setSearchTxt(value);
            }}
          />
        }
        numColumns={2}
        data={filteredQuestion}
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

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: '#470114',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingBottom: 20,
  },
  image: {
    marginTop: 20,
    width: moderateScale(80, 0.3),
    height: moderateScale(80, 0.3),
    borderRadius: 50,
  },
  latHtaukBayDinTxt: {
    color: '#fff',
    fontFamily: Fonts.bold,
    fontSize: 20,
  },
  searchContainer: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  textInputWrapper: {
    width: '100%',
    height: moderateScale(53, 0.3),
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingLeft: 10,
  },
  textInput: {
    flex: 1,
    fontFamily: Fonts.regular,
    fontSize: 14,
  },
  icon: {position: 'absolute', right: 0, paddingRight: 10},
});

export default Home;
