import React from 'react'
import { Image, TouchableOpacity, View, Text ,DeviceEventEmitter} from 'react-native'
//import { SHOP_CART, MENU, NOTIFICATION ,PROFILE} from '../images'
import styles from '../components/Auth/styles'
import Ripple from 'react-native-material-ripple'
import { FAQ, NOTIFICATION_DRAWER, MY_ACCOUNT, WISHLIST, MY_CRT, MY_ORDR, OFF_ZONE, LEGAL, NEXT_GRAY, PROFILE_IMG } from '../images'
import { FONT_FAMILIY, WIDTH, KEY, APP_PARAMS } from '../constants/index'
import { colors } from '../theme'
import { DIMENS, CURRENCY } from '../constants'
import translate from '../i18n/i18n'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

const drawerList = [
    { uri: MY_ACCOUNT, title: translate('Sign_In'), subTitle: translate('MY_ACCOUNT_SUB_TITLE') },
    { uri: NOTIFICATION_DRAWER, title: translate('NOTIFICATION'), subTitle: translate('NOTIFICATION_SUB_TITLE') },
    { uri: WISHLIST, title: translate('WISHLIST'), subTitle: translate('WISHLIST_SUB_TITLE') },
    { uri: MY_CRT, title: translate('MY_CART'), subTitle: translate('MY_CART_SUB_TITLE') },
    { uri: MY_ORDR, title: translate('MY_ORDER'), subTitle: translate('MY_ORDER_SUB_TITLE') },
    { uri: OFF_ZONE, title: translate('OFF_ZONE'), subTitle: translate('OFF_ZONE_SUB_TITLE') },
    { uri: FAQ, title: translate('FAQ'), subTitle: translate('FAQ_SUB_TITLE') },
    { uri: LEGAL, title: translate('LEGAL'), subTitle: translate('LEGAL_SUB_TITLE') }
]

export default class CustomDrawer extends React.PureComponent {
    constructor(props) {
        super(props)
        this.userDataListner = DeviceEventEmitter.addListener('UserDetail',this.listnerUpdateUserData)
        this.state={
            name: global[KEY.USER_DATA]!=undefined&&global[KEY.USER_DATA][KEY.NAME]!=undefined?global[KEY.USER_DATA][KEY.NAME]:'Home',
            phone: global[KEY.USER_DATA]!=undefined&&global[KEY.USER_DATA][APP_PARAMS.PHONE]!=undefined?global[KEY.USER_DATA][APP_PARAMS.PHONE]:undefined,
            drawerListArr:drawerList
        }
        //alert('user'+global[KEY.AS_GUESt_USER])
    }
    componentWillUnmount=()=>{
        this.userDataListner.remove()
    }
    listnerUpdateUserData =(object)=>{
         if(object!=undefined&&object[KEY.NAME]!=undefined&&object[KEY.NAME]!=''){
            let drawrLitsTmep = [...this.state.drawerListArr]
               drawrLitsTmep[0].title = translate('MY_ACCOUNT')
               this.setState({
                name:'MY_ACCOUNT',
                drawerListArr :drawrLitsTmep 
            })

            this.setState({
                name: object[KEY.NAME],//:'Home',
                phone: object[APP_PARAMS.PHONE]!=undefined&&object[APP_PARAMS.PHONE]!=''?
                        object[APP_PARAMS.PHONE]:undefined,
            })
         }else{
            let drawrLitsTmep = [...this.state.drawerListArr]
            if(global[KEY.AS_GUESt_USER]!=undefined&&global[KEY.AS_GUESt_USER]){
               drawrLitsTmep[0].title = translate('Sign_In')
               this.setState({
                name:'Home',
                drawerListArr :drawrLitsTmep 
              })
            }
         }
    }
    drawerPress=(item,index)=>{
        this.props.navigation.closeDrawer()
        switch (index) {
            case 0:
                // if(global[KEY.AS_GUESt_USER]!=undefined&&global[KEY.AS_GUESt_USER]){
                //  this.props.navigation.navigate('Login_As_GUEST')
                // }else
                this.props.navigation.navigate('MyAccount')
                break;
            case 1:
                this.props.navigation.navigate('Notification')
                break;
            case 2:
                this.props.navigation.navigate('Wishlist')
                break; 
            case 3:
                this.props.navigation.navigate('OrderSummary',{isFrom:'Cart'})
                break;       
            case 4:
                this.props.navigation.navigate('MyOrder')
                break;
            default:
                break;
        }
    }
    renderDrawerList = (item,index) => {
        return (
            <Ripple style={{ flexDirection: 'row', paddingLeft: DIMENS.px_10, justifyContent: 'space-between', alignItems:'center'}}
            onPress={()=>this.drawerPress(item,index)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{flex:.2,justifyContent:'center',alignItems:'center'}}>
                    <Image source={item.uri} style={{
                        width: DIMENS.px_50,
                        height: DIMENS.px_50,
                       
                    }} />
                    </View>
                    <View style={{width:'100%',flex:.8,alignItems: 'center',justifyContent:'center',borderBottomWidth:DIMENS.px_05,borderBottomColor:colors.lightGrayClr,paddingVertical:15}}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%',}}>
                            <View style={{ marginLeft: DIMENS.px_5, marginRight: DIMENS.px_5 }}>
                                <Text style={{ color: colors.primary, fontFamily: FONT_FAMILIY.Roboto_Medium, fontSize: DIMENS.txt_size_medium_1 }}>{item.title}</Text>
                                <Text style={{ color: colors.menuSubTitle, fontFamily: FONT_FAMILIY.Roboto_Regular, fontSize: DIMENS.txt_size_small }}>{item.subTitle}</Text>
                            </View>
                            <Image style={{ width: 16, height: 29, right:DIMENS.px_5, position: 'absolute' }} resizeMode={'center'} source={NEXT_GRAY} />
                        </View>
                    </View>
                </View>
            </Ripple>
        )
    }
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false} 
            contentContainerStyle={{paddingBottom:20}}
            bounces={false}
           >
                <View style={{ backgroundColor: colors.primary, flexDirection: 'row', paddingHorizontal: DIMENS.px_20, paddingVertical: DIMENS.px_30, alignItems: 'center' }}>
                    <View style={{
                      //  borderRadius: DIMENS.px_30,
                        marginRight: DIMENS.px_10,
                       // borderWidth: DIMENS.px_05,
                       // borderColor: colors.lightGrayClr
                    }}>
                        <Image source={PROFILE_IMG} style={{
                            width: DIMENS.px_60,
                            height: DIMENS.px_60,resizeMode:'contain'
                        }} />
                    </View >

                    <View>
                        <Text style={{ color: colors.white, fontFamily: FONT_FAMILIY.Roboto_Bold, fontSize: DIMENS.txt_size_large_extra }}>{this.state.name}</Text>
                        <Text style={{ color: colors.white, fontFamily: FONT_FAMILIY.Roboto_Regular, fontSize: DIMENS.txt_size_medium, marginTop: DIMENS.px_3 }}>{this.state.phone}</Text>
                    </View>

                </View>
                {/* List */}
                <FlatList
                    data={this.state.drawerListArr}
                    renderItem={({ item,index }) => this.renderDrawerList(item, index)}
                    extraData={this.state}
                    keyExtractor={(index) => index.toString()} />
            </ScrollView>)
    }
}

