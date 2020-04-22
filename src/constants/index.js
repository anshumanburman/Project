import { Dimensions} from 'react-native'


export const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/neo/';
export const API_KEY = 'SuDrgZhirYuiFR3NkZZkaJP5HpIMUUQbkyqXzvro';
export const BASE_URL_RANDOM_ASTRO = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=';




export const API = {
   loginAPi:''

}

export const APP_PARAMS = {
    ROLE: "role",
    SUPER_ADMIN: 'superAdmin',
   
    LAT:'lat',
    LNG : 'lng',
    COUNTRY_LONG_NAME:'COUNTRY_LONG_NAME',
    COUNTRY_SHORT_NAME:'COUNTRY_SHORT_NAME',
    STATE_LONG_NAME:'STATE_LONG_NAME',
    STATE_SHORT_NAME:'STATE_SHORT_NAME',
    CITY_LONG_NAME:'CITY_LONG_NAME',
    CITY_SHORT_NAME:'CITY_SHORT_NAME',
    POSTAL_CODE : 'postCode',
    FORMATED_ADDRESS:'FORMATED_ADDRESS',
    //SIGN Up
    FULL_NAME:'fullName',
    PHONE:'phone',
    ALTER_NATE_PHONE:'alterNatePhoneNumber',
    EMAIL: 'email',
    PASSWORD: 'password',
    PHONE_CODE: 'phonecode',
    COUNTRY_ID: 'countryId',
    STATE_ID: 'stateId',
    CITY_ID: 'cityId',
    //HOME
    USER_ID: "userId",
    REQ_ID : "requestId",
    SUCCESS:'success',
    MESSAGE:'message',
    DATA:'data',
    ERROR:'error',
    CUSTOMER_ID:'customerId',
    OTP:'otp',

    CAT_ID:'categoryId',
    START:"start" ,    
    END:"end" ,  
    id:"uid",
    _id:"id",
    CAT_RELEATED_PRODUCT:'categoryRelatedProductList',
    SUB_CAT:'subCategories',
    TOTAL_PRODUCT_SIZE:'totalProductSize',
    CAT_U_ID:'categoryUuid',
    PRODUCT_ID :'productId',
    RELATED_PRODUCT_LIST:'relatedProductList',
    PRODUCTS:'products',
    COMNT_REVIEW_LIST:'commentReviewsList',
    IMG_LOC:'imageLocations',
    IMG_LOC_LIST:'imageLocationsList',
    NAME:'name',
    TOTAL_REVIEW:"totalReviews",
    TOTAL_RATING:"totalRating",
    DISCOUNT_PRICE:"discountPrice",
    PRICE:"price",
    DISCOUNT:'discount',
    OFF:'off',
    U_UID:'uuid',
    WISH:"wish",
    CART: "cart",

    OFF_TYPE:'offerType',
    PRODUCT_LIST:'productList',
    OFF_IN_PER:'offInPercentage',
    RES_PKT:"responsePacket",
    APARTMENT_SUIT:'apartmentSuit',
    STREET_ADDRESS:'streetAddress',
    LANDMARK:'landMark',
    CITY:'city',
    STATE:'state',
    ADDRESS_TYPE:'addressType',
    HOME:'home',
    WORK:'work',
    FIRST_NAME:'firstName',
    ADDRESS_ID:'addressId',
    SORT_LIST:'sortList',
    FILTER_TYPE:'filterType'
   
  
}
 export const KEY = {
     USER_DATA:'userdata',
     NAME:'name',
     AS_GUESt_USER:'AS_GUESt_USER',
 }

export const LOCALES = {
    ENGLISH: { id: 1, name: "en", label: "ENGLISH" },
    HINDI: { id: 2, name: "hi", label: "हिंदी" }
};
export const FONT_FAMILIY = {
    Roboto_Black: 'Roboto-Black',
    Roboto_Bold: 'Roboto-Bold',
    Roboto_Light: 'Roboto-Light',
    Roboto_Medium: 'Roboto-Medium',
    Roboto_Regular: 'Roboto-Regular',
    Ittalian: 'roboto.light-italic',
}

export const DIMENS = {
    px_0 : 0,
    px_05 : 0.5,
    px_1 : 1,
    px_2 : 2,
    px_3 : 3,
    px_5 : 5,
    px_8 : 8,
    px_10 : 10,
    px_12 : 12,
    px_300 : 300,
    px_14:14,
    px_15 : 15,
    px_15 : 16,
    px_18 : 18,
    px_20 : 20,
    px_22 : 22,
    px_23 : 23,
    px_25 : 25,
    px_28 : 28,
    px_30 : 30,
    px_32 : 32,
    px_35 : 35,
    px_40 : 40,
    px_45 : 45,
    px_50 : 50,
    px_60 : 60,
    px_70 : 70,
    px_75 : 75,
    px_80 : 80,
    px_90 : 90,
    px_100 : 100,
    px_130 : 130,
    px_140 : 140,
    px_150 : 150,

    px_200 : 200,
    px_250 : 250,

    btn_font_size : 16,
    btn_h : 40,
    devider_h : 1,
    devider_h_half : 0.5,
    devider_h_1 : 1,
    txt_size_small_small : 10,
    txt_size_small : 11,
    txt_size_small_12 : 12,
    txt_size_min_small : 8,
    txt_size_medium : 13,
    txt_size_medium_14 : 14,
    txt_size_medium_1 : 15,
    txt_size_large : 16,
    txt_size_large_extra : 18,
    txt_size_large_extra_20 : 20,
    txt_size_large_extra_30 : 30,
    txt_size_large_extra_40 : 40,
    row_h : 50,
    minHeight : 50,
    row_img_w : 60,
    row_img_big : 70,
    row_img_w_2 : 50,
    tab_width : 24,

    //Category Size
    cat_img_width:55,
    cat_img_height:55,
    cat_img_radius:27.5
}


export const CURRENCY = {
    RUPEES:'\u20B9',
    DOLLER:'\u0024',
    EURO:'\u20AC',
    JAPANES_YEN:'\u00A5',
    POUND_STERLING : '\u00A3'
}
export const SCREEN = {
    HOME:'Home',
    HOME_DETAIL:'HomeDetail',
    LOGIN:'Auth',
}



//HEIGHT AND WIDTH
export const WIDTH = Dimensions.get('screen').width
export const HEIGHT = Dimensions.get('screen').height

export const APP_LOGOUT_REQUEST = 'APP_LOGOUT_REQUEST'


export const APP_LOGIN_REQUEST = 'APP_LOGIN_REQUEST'
export const APP_LOGIN_FAIL = 'APP_LOGIN_FAIL'
export const APP_LOGIN_SUCCESS = 'APP_LOGIN_SUCCESS'


export const APP_RANDOM_ASTROID_REQUEST = 'APP_RANDOM_ASTROID_REQUEST'
export const APP_RANDOM_ASTROID_FAIL = 'APP_RANDOM_ASTROID_FAIL'
export const APP_RANDOM_ASTROID_SUCCESS = 'APP_RANDOM_ASTROID_SUCCESS'
// export const APP_UPDATE_REQUEST = 'APP_UPDATE_REQUEST'
// export const APP_UPDATE_SUCCESS = 'APP_UPDATE_SUCCESS'

// export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
// export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
// export const SIGNUP_FAIL = 'SIGNUP_FAIL'

// export const OTP_REQUEST = 'OTP_REQUEST'
// export const OTP_SUCCESS = 'OTP_SUCCESS'
// export const OTP_FAIL = 'OTP_FAIL'

// export const HOME_REQUEST = 'HOME_REQUEST'
// export const HOME_SUCCESS = 'HOME_SUCCESS'
// export const HOME_FAIL = 'HOME_FAIL'

// export const SEARCH_REQUEST = 'SEARCH_REQUEST'
// export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
// export const SEARCH_FAIL = 'SEARCH_FAIL'

// export const CATEGORY_DETAIL_REQUEST = 'CATEGORY_DETAIL_REQUEST'
// export const CATEGORY_DETAIL_REQUEST_PAGINATION = 'CATEGORY_DETAIL_REQUEST_PAGINATION'

// export const CATEGORY_DETAIL_SUCCESS = 'CATEGORY_DETAIL_SUCCESS'
// export const CATEGORY_DETAIL_FAIL = 'CATEGORY_DETAIL_FAIL'

// export const CATEGORY_PRODUCT_DETAIL_REQUEST = 'CATEGORY_PRODUCT_DETAIL_REQUEST'
// export const CATEGORY_PRODUCT_DETAIL_REQUEST_FAIL = 'CATEGORY_PRODUCT_DETAIL_REQUEST_FAIL'
// export const CATEGORY_PRODUCT_DETAIL_REQUEST_SUCCESS = 'CATEGORY_PRODUCT_DETAIL_REQUEST_SUCCESS'

// export const ADD_WISH_LIST_REQUEST = 'ADD_WISH_LIST_REQUEST'
// export const ADD_WISH_LIST_REQUEST_FAIL = 'ADD_WISH_LIST_REQUEST_FAIL'
// export const ADD_WISH_LIST_REQUEST_SUCCESS = 'ADD_WISH_LIST_REQUEST_SUCCESS'

// export const WISH_LIST_REQUEST = 'WISH_LIST_REQUEST'
// export const WISH_LIST_REQUEST_FAIL = 'WISH_LIST_REQUEST_FAIL'
// export const WISH_LIST_REQUEST_SUCCESS = 'WISH_LIST_REQUEST_SUCCESS'

// export const DEAL_OFF_LIST_REQUEST = 'DEAL_OFF_LIST_REQUEST'
// export const DEAL_OFF_LIST_REQUEST_PAGINATION = 'DEAL_OFF_LIST_REQUEST_PAGINATION'
// export const DEAL_OFF_REQUEST_FAIL = 'DEAL_OFF_LIST_REQUEST_FAIL'
// export const DEAL_OFF_REQUEST_SUCCESS = 'DEAL_OFF_LIST_REQUEST_SUCCESS'

// //GEO Location API
// export const ADDRESS_FROM_GOOGLE_REQ = 'ADDRESS_FROM_GOOGLE_REQ'
// export const ADDRESS_FROM_GOOGLE_FAIL = 'ADDRESS_FROM_GOOGLE_FAIL'
// export const ADDRESS_FROM_GOOGLE_SUCCESS = 'ADDRESS_FROM_GOOGLE_SUCCESS'


// export const CITY_API_REQ = 'CITY_API_REQ'
// export const CITY_API_FAIL = 'CITY_API_FAIL'
// export const CITY_API_SUCCESS = 'CITY_API_SUCCESS'

// export const STATE_API_REQ = 'STATE_API_REQ'
// export const STATE_API_FAIL = 'STATE_API_FAIL'
// export const STATE_API_SUCCESS = 'STATE_API_SUCCESS'

// export const COUNTRY_API_REQ = 'COUNTRY_API_REQ'
// export const COUNTRY_API_FAIL = 'COUNTRY_API_FAIL'
// export const COUNTRY_API_SUCCESS = 'COUNTRY_API_SUCCESS'

// export const ADD_ADDRESS_API_REQ = 'ADD_ADDRESS_API_REQ'
// export const ADD_ADDRESS_API_FAIL = 'ADD_ADDRESS_API_FAIL'
// export const ADD_ADDRESS_API_SUCCESS = 'ADD_ADDRESS_API_SUCCESS'

// export const DELETE_ADDRESS_API_REQ = 'DELETE_ADDRESS_API_REQ'
// export const DELETE_ADDRESS_API_FAIL = 'DELETE_ADDRESS_API_FAIL'
// export const DELETE_ADDRESS_API_SUCCESS = 'DELETE_ADDRESS_API_SUCCESS'


// export const LIST_ADDRESS_API_REQ = 'LIST_ADDRESS_API_REQ'
// export const LIST_ADDRESS_API_FAIL = 'LIST_ADDRESS_API_FAIL'
// export const LIST_ADDRESS_API_SUCCESS = 'LIST_ADDRESS_API_SUCCESS'

// export const SORT_FILTER_API_REQ = 'SORT_FILTER_API_REQ'
// export const SORT_FILTER_API_FAIL = 'SORT_FILTER_API_FAIL'
// export const SORT_FILTER_API_SUCCESS = 'SORT_FILTER_API_SUCCESS'


// QB initialization
export const INIT_QB_REQUEST = 'INIT_QB_REQUEST'
export const INIT_QB_REQUEST_SUCCESS = 'INIT_QB_REQUEST_SUCCESS'
export const INIT_QB_REQUEST_FAIL = 'INIT_QB_REQUEST_FAIL'
// Internet connection state
export const CONNECTION_STATE_CHANGE = 'CONNECTION_STATE_CHANGE'
// User authentication
export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST'
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS'
export const AUTH_LOGIN_FAIL = 'AUTH_LOGIN_FAIL'
export const AUTH_LOGOUT_REQUEST = 'AUTH_LOGOUT_REQUEST'
export const AUTH_LOGOUT_SUCCESS = 'AUTH_LOGOUT_SUCCESS'
export const AUTH_LOGOUT_FAIL = 'AUTH_LOGOUT_FAIL'
export const AUTH_GET_SESSION_REQUEST = 'AUTH_GET_SESSION_REQUEST'
export const AUTH_GET_SESSION_SUCCESS = 'AUTH_GET_SESSION_SUCCESS'
export const AUTH_GET_SESSION_FAIL = 'AUTH_GET_SESSION_FAIL'
// QB chat authentication
export const CHAT_IS_CONNECTED_REQUEST = 'CHAT_IS_CONNECTED_REQUEST'
export const CHAT_IS_CONNECTED_SUCCESS = 'CHAT_IS_CONNECTED_SUCCESS'
export const CHAT_IS_CONNECTED_FAIL = 'CHAT_IS_CONNECTED_FAIL'
export const CHAT_CONNECT_REQUEST = 'CHAT_CONNECT_REQUEST'
export const CHAT_CONNECT_SUCCESS = 'CHAT_CONNECT_SUCCESS'
export const CHAT_CONNECT_FAIL = 'CHAT_CONNECT_FAIL'
export const CHAT_DISCONNECT_REQUEST = 'CHAT_DISCONNECT_REQUEST'
export const CHAT_DISCONNECT_SUCCESS = 'CHAT_DISCONNECT_SUCCESS'
export const CHAT_DISCONNECT_FAIL = 'CHAT_DISCONNECT_FAIL'
export const CHAT_PING_USER_REQUEST = 'CHAT_PING_USER_REQUEST'
export const CHAT_PING_USER_SUCCESS = 'CHAT_PING_USER_SUCCESS'
export const CHAT_PING_USER_FAIL = 'CHAT_PING_USER_FAIL'
export const CHAT_PING_SERVER_REQUEST = 'CHAT_PING_SERVER_REQUEST'
export const CHAT_PING_SERVER_SUCCESS = 'CHAT_PING_SERVER_SUCCESS'
export const CHAT_PING_SERVER_FAIL = 'CHAT_PING_SERVER_FAIL'
// QB Users
export const USERS_CREATE_REQUEST = 'USERS_CREATE_REQUEST'
export const USERS_CREATE_SUCCESS = 'USERS_CREATE_SUCCESS'
export const USERS_CREATE_FAIL = 'USERS_CREATE_FAIL'
export const USERS_UPDATE_REQUEST = 'USERS_UPDATE_REQUEST'
export const USERS_UPDATE_SUCCESS = 'USERS_UPDATE_SUCCESS'
export const USERS_UPDATE_FAIL = 'USERS_UPDATE_FAIL'
export const USERS_GET_REQUEST = 'USERS_GET_REQUEST'
export const USERS_GET_SUCCESS = 'USERS_GET_SUCCESS'
export const USERS_GET_FAIL = 'USERS_GET_FAIL'
export const USERS_SELECT = 'USERS_SELECT'
export const USERS_BULK_SELECT = 'USERS_BULK_SELECT'
export const USERS_SET_FILTER = 'USERS_SET_FILTER'
export const USERS_SET_PAGE = 'USERS_SET_PAGE'
// QB Dialogs
export const DIALOGS_SET_FILTER = 'DIALOGS_SET_FILTER'
export const DIALOGS_UNREAD_COUNT_INCREMENT = 'DIALOGS_UNREAD_COUNT_INCREMENT'
export const DIALOGS_UNREAD_COUNT_DECREMENT = 'DIALOGS_UNREAD_COUNT_DECREMENT'
export const DIALOGS_GET_REQUEST = 'DIALOGS_GET_REQUEST'
export const DIALOGS_GET_SUCCESS = 'DIALOGS_GET_SUCCESS'
export const DIALOGS_GET_FAIL = 'DIALOGS_GET_FAIL'
export const DIALOGS_CREATE_REQUEST = 'DIALOGS_CREATE_REQUEST'
export const DIALOGS_CREATE_SUCCESS = 'DIALOGS_CREATE_SUCCESS'
export const DIALOGS_CREATE_FAIL = 'DIALOGS_CREATE_FAIL'
export const DIALOGS_CREATE_CANCEL = 'DIALOGS_CREATE_CANCEL'
export const DIALOGS_EDIT_REQUEST = 'DIALOGS_EDIT_REQUEST'
export const DIALOGS_EDIT_SUCCESS = 'DIALOGS_EDIT_SUCCESS'
export const DIALOGS_EDIT_FAIL = 'DIALOGS_EDIT_FAIL'
export const DIALOGS_EDIT_CANCEL = 'DIALOGS_EDIT_CANCEL'
export const DIALOGS_JOIN_REQUEST = 'DIALOGS_JOIN_REQUEST'
export const DIALOGS_JOIN_SUCCESS = 'DIALOGS_JOIN_SUCCESS'
export const DIALOGS_JOIN_FAIL = 'DIALOGS_JOIN_FAIL'
export const DIALOGS_LEAVE_REQUEST = 'DIALOGS_LEAVE_REQUEST'
export const DIALOGS_LEAVE_SUCCESS = 'DIALOGS_LEAVE_SUCCESS'
export const DIALOGS_LEAVE_FAIL = 'DIALOGS_LEAVE_FAIL'
export const DIALOGS_DELETE_REQUEST = 'DIALOGS_DELETE_REQUEST'
export const DIALOGS_DELETE_SUCCESS = 'DIALOGS_DELETE_SUCCESS'
export const DIALOGS_DELETE_FAIL = 'DIALOGS_DELETE_FAIL'
export const DIALOGS_SELECT = 'DIALOGS_SELECT'
export const DIALOGS_SELECT_RESET = 'DIALOGS_SELECT_RESET'
// QB Messages
export const MESSAGES_GET_REQUEST = 'MESSAGES_GET_REQUEST'
export const MESSAGES_GET_SUCCESS = 'MESSAGES_GET_SUCCESS'
export const MESSAGES_GET_FAIL = 'MESSAGES_GET_FAIL'
export const MESSAGES_MARK_READ_REQUEST = 'MESSAGES_MARK_READ_REQUEST'
export const MESSAGES_MARK_READ_SUCCESS = 'MESSAGES_MARK_READ_SUCCESS'
export const MESSAGES_MARK_READ_FAIL = 'MESSAGES_MARK_READ_FAIL'
export const MESSAGES_MARK_DELIVERED_REQUEST = 'MESSAGES_MARK_DELIVERED_REQUEST'
export const MESSAGES_MARK_DELIVERED_SUCCESS = 'MESSAGES_MARK_DELIVERED_SUCCESS'
export const MESSAGES_MARK_DELIVERED_FAIL = 'MESSAGES_MARK_DELIVERED_FAIL'
export const MESSAGES_SEND_REQUEST = 'MESSAGES_SEND_REQUEST'
export const MESSAGES_SEND_SUCCESS = 'MESSAGES_SEND_SUCCESS'
export const MESSAGES_SEND_FAIL = 'MESSAGES_SEND_FAIL'
export const MESSAGES_SYSTEM_SEND_REQUEST = 'MESSAGES_SYSTEM_SEND_REQUEST'
export const MESSAGES_SYSTEM_SEND_SUCCESS = 'MESSAGES_SYSTEM_SEND_SUCCESS'
export const MESSAGES_SYSTEM_SEND_FAIL = 'MESSAGES_SYSTEM_SEND_FAIL'
// QB file
export const FILE_UPLOAD_REQUEST = 'FILE_UPLOAD_REQUEST'
export const FILE_UPLOAD_SUCCESS = 'FILE_UPLOAD_SUCCESS'
export const FILE_UPLOAD_FAIL = 'FILE_UPLOAD_FAIL'
export const FILE_GET_INFO_REQUEST = 'FILE_GET_INFO_REQUEST'
export const FILE_GET_INFO_SUCCESS = 'FILE_GET_INFO_SUCCESS'
export const FILE_GET_INFO_FAIL = 'FILE_GET_INFO_FAIL'
export const FILE_PUBLIC_URL_REQUEST = 'FILE_PUBLIC_URL_REQUEST'
export const FILE_PUBLIC_URL_SUCCESS = 'FILE_PUBLIC_URL_SUCCESS'
export const FILE_PUBLIC_URL_FAIL = 'FILE_PUBLIC_URL_FAIL'
export const FILE_PRIVATE_URL_REQUEST = 'FILE_PRIVATE_URL_REQUEST'
export const FILE_PRIVATE_URL_SUCCESS = 'FILE_PRIVATE_URL_SUCCESS'
export const FILE_PRIVATE_URL_FAIL = 'FILE_PRIVATE_URL_FAIL'
// QB Info
export const GET_INFO_REQUEST = 'GET_INFO_REQUEST'
export const GET_INFO_SUCCESS = 'GET_INFO_SUCCESS'
export const GET_INFO_FAIL = 'GET_INFO_FAIL'
// Device UDID for Push notifications
export const DEVICE_UDID_SET = 'DEVICE_UDID_SET'
export const DEVICE_UDID_REMOVE = 'DEVICE_UDID_REMOVE'





export const emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
export const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
export const passRegex = /^.*(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$#%])(^[a-zA-Z0-9@$#%]+$)/
////?-i)(?=^.{8,}$)((?!.*\s)(?=.*[A-Z])(?=.*[a-z]))((?=(.*\d){1,})|(?=(.*\W){1,}))^.*$/
 


