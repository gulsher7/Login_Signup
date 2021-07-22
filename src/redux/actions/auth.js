
import { LOGIN, SIGNUP } from "../../config/urls";
import { apiPost, clearUserData, setUserData } from "../../utils/utils";
import store from "../store";
import types from "../types";

const { dispatch } = store


export const saveUserData = (data) => {
    dispatch({
        type: types.LOGIN,
        payload: data
    })
}

export function login(data) {
    return new Promise((resolve, reject) => {
        return apiPost(LOGIN, data).then((res) => {
            if (res.data.emailVerified) {
                setUserData(res.data).then(() => {
                    resolve(res)
                    saveUserData(res.data)
                });
                return
            }
            resolve(res)
        }).catch((error) => {
            reject(error)
        })
    })
}

export function signup(data) {
    return apiPost(SIGNUP, data)
}

export function logout(){
    dispatch({type: types.CLEAR_REDUX_STATE})
    clearUserData()
}