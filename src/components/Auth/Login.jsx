import React from 'react'
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text, Image,
  TouchableOpacity,
  View, Dimensions, TextInput
} from 'react-native'
import { Form, Field } from 'react-final-form'
import Ripple from 'react-native-material-ripple';


import FormTextInput from '../FormTextInput'
import HeaderButton from '../HeaderButton'
import { showError, setupPushNotifications } from '../../NotificationService'
import styles from './styles'
import { colors } from '../../theme'
import { images, DOWN_ARR, NEXT, CHECKMARK, CHECKMARK_GRAY, LOCK, EMAIL } from '../../images'
import translate from '../../i18n/i18n';
import {
  APP_PARAMS, FONT_FAMILIY, DIMENS, emailRegex, KEY, passRegex, SCREEN
} from '../../constants'
import CommonHeader from '../../common/CommonHeader'
import NavigationService from '../../NavigationService'
import CountryPicker, { getAllCountries, getCallingCode }
  from 'react-native-country-picker-modal';
import { showInfoToast, showErrorToast } from '../../utility/Toast'
import Loader from '../../common/Loader'
import { storeData, retrieveData } from '../../common/AsyncStorage'
import CommonAddressView from '../../common/CommonAddressView';



const Header = ({ children, style }) => (
  <Text style={[styles.header, style]}>
    {children}
  </Text>
)

const Label = ({ children, style }) => (
  <Text style={[styles.label, style]}>
    {children}
  </Text>
)


export default class Login extends React.PureComponent {


  constructor(props) {
    super(props)
    this.passRef = undefined;
    this.state = {
      asteroidTxtField: '',
    }
  }
  componentDidMount() {
  }
 
loginBtnPress=()=>{
  this.props.loginAppUser(this.state.asteroidTxtField).then(response=>{
    console.log("response::--",response);
    this.props.navigation.navigate(SCREEN.HOME)
   // NavigationService.clearStack(SCREEN.HOME)
  })
}
randomAstroidAPI=()=>{
  this.props.randomAstroidClk().then(response=>{
    console.log("response::--",response);
    if(response&&response.near_earth_objects&&response.near_earth_objects.length>0){
      let id = response.near_earth_objects[0].id
      this.props.navigation.navigate(SCREEN.HOME,{id:id})
    }
   
   // NavigationService.clearStack(SCREEN.HOME)
  })
}


  render() {
    const { loading,randomLoding } = this.props


    return (
      <View style={styles.topView}>
        

        <View style={{ flex: 1 }}>

          <View style={styles.formControlView}>

            <View style={[styles.textInput, { flexDirection: 'row', alignItems: 'center' }]}>

              <TextInput
                placeholder={translate('TXT_FILD_PLACEHOLDER')}
                onChangeText={(txt) => {
                  this.setState({ asteroidTxtField: txt })
                }}
                onSubmitEditing={() => this.passRef.focus()}
                returnKeyType="next"
                value={this.state.asteroidTxtField}
                style={[{
                  paddingVertical: Platform.OS != "android" ? DIMENS.px_18 : DIMENS.px_10,
                  flex: 0.9, width: '100%', marginLeft: -DIMENS.px_8
                }]}

              />

            </View>
           

            <Ripple style={[styles.submitBtn,{backgroundColor:this.state.asteroidTxtField != ''  ?colors.primary:colors.primaryDisabled}]} 
            disabled={this.state.asteroidTxtField != '' ? false : true}
              onPress={() => this.loginBtnPress()}>
              {!loading ?
                <Text style={{ color: colors.white, fontWeight: 'bold', padding: DIMENS.px_15, textAlign: 'center' }}>
                  {translate('SUBMIT')}
                </Text> :
                <ActivityIndicator color={colors.white} size={35} style={{ padding: 10 }} />

              }
            </Ripple>

            <Ripple style={[ styles.submitBtn,{marginTop:DIMENS.px_10}]}
              onPress={() => this.randomAstroidAPI()}>
                 {!randomLoding ?
              <Text style={{ color: colors.white, fontWeight: 'bold', padding: DIMENS.px_15,textAlign: 'center', fontWeight: 'bold' }}>
                {translate('RANDOM_ASTEROID')}
              </Text>:
              <ActivityIndicator color={colors.white} size={35} style={{ padding: 10 }} />
                            }
            </Ripple>
           
          </View>
        </View>

        {/* {
                loading &&
                <Loader loader={true} />
              }  */}
      </View>
    )
  }

}