import React from 'react'
import {
  ActivityIndicator,
  Text, StyleSheet,
  View,Linking
} from 'react-native'
import Ripple from 'react-native-material-ripple';
import { colors } from '../../theme';
import translate from '../../i18n/i18n';
import { DIMENS, FONT_FAMILIY, WIDTH, HEIGHT, APP_PARAMS, KEY, SCREEN } from '../../constants';
import Loader from '../../common/Loader'
import { TouchableOpacity } from 'react-native-gesture-handler';

const data={
  name:'Astroid',
  nasa_jpl_url:'https://',
  is_potentially_hazardous_asteroid:'abcd'
}
export default class Home extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  componentDidMount() {
      if(this.props.navigation.state.params&&this.props.navigation.state.params.id){
        this.props.astroInformationAPi(this.props.navigation.state.params.id).then(response=>{
          console.log("data::--home",response);
          
        })
      }
    console.log('componentDidMount of home screen')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount of home screen')
  }
  //ACtion
  
  render() {
     const {data,loading} = this.props
     console.log("data:--",data);
     
    return (
      <View style={{
        backgroundColor: colors.white,
        flex: 1, width: '100%',
      }}>
        
        {
           data?
          <>
          <Text style={styles.titleStyle}>{translate('ASTROID_INFO')}</Text>

          <View style={styles.subContainer}> 

        <Text style={styles.nameStyle}>Name :  {data.name}</Text>
        <Text style={styles.subTxtStyle}>Potential Astroid:   {data.is_potentially_hazardous_asteroid=='true'?'YES':'NO'}</Text>

        <TouchableOpacity onPress={()=>Linking.openURL(data.nasa_jpl_url)}>
        <Text style={styles.nasaUtlStyle}>{data.nasa_jpl_url}</Text>
        </TouchableOpacity>
        </View>
        </>:
        loading&&
        <ActivityIndicator color={colors.white} size={35} style={{ padding: 10 }} />

        }

   

      </View>
    )
  }
}
const styles = StyleSheet.create({
  titleStyle:{
    fontSize:DIMENS.txt_size_large_extra_20,
    color:colors.black,
    marginTop:DIMENS.px_20,
    marginHorizontal:DIMENS.px_10
  },
  nameStyle:{
    fontSize:DIMENS.txt_size_large,
    color:colors.black,
    marginVertical:DIMENS.px_5,
    
  },
  nasaUtlStyle:{
    fontSize:DIMENS.txt_size_medium_14,
    color:colors.blueTextClr,
    marginBottom:DIMENS.px_5,
    textDecorationLine:'underline',
   
    alignSelf:'flex-start'
  },
  subTxtStyle:{
    fontSize:DIMENS.txt_size_medium_14,
    color:colors.black,
    marginBottom:DIMENS.px_5,
  },
  subContainer:{
    backgroundColor: colors.white,
    borderColor: colors.white,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    elevation: 4,
    shadowColor: colors.primaryDisabled,
    shadowOffset: { height: 8, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 6,
   
    marginTop:DIMENS.px_30,
    marginHorizontal:DIMENS.px_10,
    paddingHorizontal:DIMENS.px_10,
    paddingVertical:DIMENS.px_10
  }
});