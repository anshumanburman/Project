import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,Image
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { colors } from '../theme'
import {LOGO} from '../images'
import {retrieveData} from '../common/AsyncStorage'



import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import { KEY, SCREEN } from '../constants';
import NavigationService from '../NavigationService';


export class AuthLoadingScreen extends React.Component {
    constructor() {
      super();
      this._bootstrapAsync();
    }
  
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
  
      retrieveData(KEY.AS_GUESt_USER,result=>{
        if(result!=undefined&&result){
          global[KEY.AS_GUESt_USER] = true
          NavigationService.clearStack(SCREEN.HOME)
        }else{
          NavigationService.clearStack('Auth')
        }
      })
    };
  
    // Render any loading content that you like here
    render() {
      return (
        <View style={{
            alignItems: 'center',
            backgroundColor: colors.white,
            flex: 1,
            justifyContent: 'center',
            width: '100%'
          }}>
            <Image source={LOGO} style={{resizeMode:'contain',width:156,height:156}}/>
            <ActivityIndicator color={colors.white} size="large" />
          </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      color:'red'
    },
  });