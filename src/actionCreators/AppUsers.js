import {
  APP_LOGIN_REQUEST,
  APP_LOGOUT_REQUEST,
  APP_LOGIN_FAIL,
  APP_LOGIN_SUCCESS,
  APP_RANDOM_ASTROID_FAIL,
  APP_RANDOM_ASTROID_REQUEST,
  APP_RANDOM_ASTROID_SUCCESS

} from '../constants'

export function loginApi(data) {
  return { type: APP_LOGIN_REQUEST, payload: data }
}
export function loginApiFail(data) {
  return { type: APP_LOGIN_FAIL, payload: data }
}
export function loginApiSuccess(data) {
  return { type: APP_LOGIN_SUCCESS, payload: data }
}
//RANDOM ASTROID
export function randomAstroidApi(data) {
  return { type: APP_RANDOM_ASTROID_REQUEST, payload: data }
}
export function randomAstroidApiFail(data) {
  return { type: APP_RANDOM_ASTROID_FAIL, payload: data }
}
export function randomAstroidApiSuccess(data) {
  return { type: APP_RANDOM_ASTROID_SUCCESS, payload: data }
}




