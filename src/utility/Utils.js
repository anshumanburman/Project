import {
 APP_PARAMS, KEY
} from '../constants'
import DeviceInfo from 'react-native-device-info';
import {storeData,retrieveData} from '../common/AsyncStorage'


export const getDeviceId = () => {
    return DeviceInfo.getUniqueId();
}


export const getUserDetail = (key)=>{
  retrieveData(key,(result=>{
          return result
    }))
}
export const copvertHtmlTotext=(txt)=>{
    var text = txt.split(/[^A-Za-z]/).filter(x => x !== '').slice(1, -1).join(' ') 
    return text
}


