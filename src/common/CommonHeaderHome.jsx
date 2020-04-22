import React from 'react'
import { Image, TouchableOpacity, View, Text, Platform } from 'react-native'
import { HEADERLOGO, MENU, NOTIFICATION ,ORDER, LOGOUT, BACK} from '../images'
import styles from '../components/Auth/styles'
import Ripple from 'react-native-material-ripple'

import { colors } from '../theme'
import { DIMENS } from '../constants'

export default ({ menuPress,notificationPress,logOutPress,backPress,isBack}) => (
    <View style={{
        backgroundColor: colors.white,
        paddingHorizontal: 10,
        marginTop:DIMENS.px_20,
        flexDirection:Platform.OS=='ios'?'row':'column',alignItems:Platform.OS == 'ios'?'center':undefined,justifyContent:Platform.OS == 'ios'?'space-between':undefined,
        height: global.HeaderHeight != undefined ? global.HeaderHeight : 60
    }}>
        {
            Platform.OS == 'ios'&& isBack &&
        <Ripple onPress={backPress} style={{width:DIMENS.px_30,height:DIMENS.px_25,justifyContent:'center'}}>
            <Image source={BACK} 
            style={{ 
                height: DIMENS.px_15, width: DIMENS.px_15,
                 resizeMode: 'contain', marginLeft: DIMENS.px_10,
                tintColor:colors.black
                 }} />
        </Ripple>
         } 
        <Ripple onPress={logOutPress} style={{width:DIMENS.px_30,height:DIMENS.px_30,right: DIMENS.px_15,
                 position:'absolute'}}>
            <Image source={LOGOUT} 
            style={{ 
                height: DIMENS.px_22, width: DIMENS.px_22,
                 resizeMode: 'contain', marginLeft: DIMENS.px_10,
                //  right:Platform.OS == 'android'&& DIMENS.px_15,
                //  position:Platform.OS == 'android'&&'absolute'
                 }} />
        </Ripple>
    </View>
)