
import translate from '../i18n/i18n'

import {
    loginApi,
    logOutUserReq,
    loginApiSuccess,
    loginApiFail,
    randomAstroidApi,
    randomAstroidApiSuccess,
    randomAstroidApiFail,
} from '../actionCreators'
import { showError } from '../NotificationService'
import axios from 'axios'
import {showErrorToast,showErrorFailToast} from '../utility/Toast'
import { API_KEY, BASE_URL,BASE_URL_RANDOM_ASTRO } from '../constants'
 
//https://api.nasa.gov/neo/rest/v1/neo/{{ENTER_ASTEROID_ID_HERE}}?api_key={{YOUR_API_KEY}}

export const astroInformationAPi = (astroidId) => async dispatch => {
    await dispatch(loginApi(astroidId))
    //let api = `${BASE_URL}{{${astroidId}}}?api_key={{${API_KEY}}}`
    let api = `${BASE_URL}${astroidId}?api_key=${API_KEY}`
    console.log('request data:-', api);
    return axios.get(api ,{
        headers: { 'content-type': 'application/json' }
    }).then((res) => {
        console.log('response data:-',JSON.stringify(res));
        if (res.data.error == undefined) {
            dispatch(loginApiSuccess(res.data))
            return (res.data)
        } else {
            dispatch(loginApiSuccess(res.data))
            return (res.data)
        }
    }).catch((err) => {
            const message = "Server don't response correctly";
            showError(message)
            dispatch(loginApiFail(message))
            return (err)
        })
}
export const randomAstroidAPI = () => async dispatch => {
    await dispatch(randomAstroidApi())
    let api = `${BASE_URL_RANDOM_ASTRO}${API_KEY}`
    console.log('request data:-', api);
    return axios.get(api ,{
        headers: { 'content-type': 'application/json' }
    }).then((res) => {
        console.log('response data:-',JSON.stringify(res));
        if (res.data.error == undefined) {
            dispatch(randomAstroidApiSuccess(res.data))
            return (res.data)
        } else {
            dispatch(randomAstroidApiSuccess(res.data))
            return (res.data)
        }
    }).catch((err) => {
            const message = "Server don't response correctly";
            showError(message)
            dispatch(randomAstroidApiFail(message))
            return (err)
        })
}
