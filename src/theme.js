export const colors = {
  
  black: '#000000',
  error: '#ff0000',
  gray: '#6c7a92',
  inputShadow: '#d8e5ff',
  label: '#333333',
  lightGray: '#eeeeee',
  lightGrayClr: '#9d9d9d',
  lightGrayText: 'rgba(157,157,157,.5)',
  lightGraytransparent: 'rgba(157,157,157,.2)',
  lightGreen: '#00cc4c',
  primary: '#012B73',
  header:'#002a6f',
  colorPrimarydark:'#01215A',
  Blue: '#0063d1',
  grayClr:'#555555',
  primaryDisabled: '#99a9c6',
  greyedBlue: '#d9e3f7',
  transparent: 'transparent',
  white: '#ffffff',
  whiteBackground: '#f4f6f9',
  imgBackground: '#EEEEEE',
  menuSubTitle: '#95A3BB',
  green: '#01B218',
  blueTextClr:'#63C8F4',
  orange:'#ff8a21',
  orangeDark:'#FE5900',
  blackTransparent:'rgba(0,0,0,.5)',
  blackTransparent_bG:'rgba(0,0,0,.4)',
  bgOfTxt:'rgba(228,234,240,1)',
  primary_fade:'#22B3F1',//'rgba(218,99,45,.5)',

}

export const navigationHeader = {
  headerStyle: {
    backgroundColor: colors.primary,
    elevation: 6,
    shadowColor: colors.gray,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  headerTintColor: colors.white,
  headerTitleStyle: { fontWeight: 'bold' },
}

export default {
  colors,
  navigationHeader,
}