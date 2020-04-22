import {

  APP_LOGIN_SUCCESS,
  APP_LOGIN_FAIL,
  APP_LOGIN_REQUEST,
  APP_LOGOUT_REQUEST,
  APP_RANDOM_ASTROID_REQUEST,
  APP_RANDOM_ASTROID_FAIL,
  APP_RANDOM_ASTROID_SUCCESS,

  

} from '../constants'

const initialState = {
  error: undefined,
  loading: false,
  loggedIn: false,
  login: '',
  user: undefined,
  data:undefined,
  randomData:undefined,
  randomLoding:false


}

export default (state = initialState, action) => {
  
  switch (action.type) {
    
    case APP_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        loggedIn: false,
        //user: { ...action.payload }
      }
      case APP_LOGIN_FAIL:
        return {
          ...state,
          loading: false,
          loggedIn: true,
          user: undefined
        }
        case APP_LOGIN_SUCCESS:
          return {
            ...state,
            loading: false,
            loggedIn: true,
            user: { ...action.payload }
          }
          case APP_RANDOM_ASTROID_REQUEST:
            return {
              ...state,
              loading: false,
              loggedIn: false,
              randomLoding:true
            }
            case APP_RANDOM_ASTROID_FAIL:
              return {
                ...state,
                loading: false,
                loggedIn: true,
                randomData: undefined,
                randomLoding:false

              }
              case APP_RANDOM_ASTROID_SUCCESS:
                return {
                  ...state,
                  loading: false,
                  loggedIn: true,
                  randomLoding:false,

                  randomData: { ...action.payload }
                }
    default: return state
  }
}