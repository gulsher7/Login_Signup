export const API_BASE_URL = "http://192.168.1.4:3960/User";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint

export const LOGIN = getApiUrl('/login')
export const SIGNUP = getApiUrl('/signup');