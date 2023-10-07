import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const Fonts = {
  regular: 'Poppins-Regular',
  bold: 'Poppins-Bold',
  medium: 'Poppins-Medium',
  light: 'Poppins-Light',
  thin: 'Poppins-Thin',
  italic: 'Poppins-Italic',

  size: {
    xxxl: '1.5rem', //20
    xxl: '1.3rem', //18
    xl: '1.1rem', //16
    l: '0.9rem', //14
    m: '0.8rem', //12
    s: '0.7rem', //10
    headerTitle: '1.5rem',
  },
  width: width,
  height: height,
};
export default Fonts;
