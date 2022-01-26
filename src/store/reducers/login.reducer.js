'use strict';

import {
    VCODE_GET_LOADING,
    VCODE_GET_DONE,
    VCODE_GET_ERROR,
    LOGIN_DONE,
    LOGIN_ERROR,
    LOGIN_LOADING,
    SETPWD_DONE,
    EVENT_TYPE,
    MODAL_CLOSE,
    VOCDE_TYPE,
    ALERT_ERR,
    CLEAR_ERR,
} from '../constants/types';

const DEFAULT_TOKEN = {
    accessTime: '',
    refreshTime: '',
    serverTime: '',
    token: '',
    tokenType: '',
};

const initialState = {
    loginSuccess: false,
    token: DEFAULT_TOKEN,
    err: '',
    errMsg: '',
    errCode: '',
    vCode: '',
    vCodeType: '',
    vCodeStatus: false, //获取了验证码为true
    completeSet: false,
};

/**
 * 登录注册模块
 * @param { object } state old状态
 * @param { object } action 事件
 * @return { object } new state
 */
function login(state = initialState, action) {
    state.vCodeStatus = false;
    switch (action.type) {
        case VOCDE_TYPE:
            return {
                ...state,
                vCodeType: action.codeType,
                mobile: action.mobile,
            };
        case VCODE_GET_LOADING:
            return {
                ...state,
                vCode: '',
                errMsg: '',
                errCode: '',
            };
        case VCODE_GET_DONE:
            return {
                ...state,
                vCode: action.payload.code,
                vCodeStatus: true,
                errMsg: '',
                errCode: '',
            };
        case VCODE_GET_ERROR: {
            let err = JSON.parse(action.payload);
            return {
                ...state,
                vCode: '',
                errMsg: err.message,
                errCode: err.reasonCode,
            };
        }
        case MODAL_CLOSE:
            return {
                ...state,
                errMsg: '',
                errCode: '',
                vCode: '',
            };
        case LOGIN_LOADING:
            return {
                ...state,
                loginSuccess: false,
                errMsg: '',
                errCode: '',
                vCode: '',
            };
        case LOGIN_DONE:
            return {
                ...state,
                loginSuccess: true,
                token: action.payload.token,
                errMsg: '',
                errCode: '',
                vCode: '',
            };
        case EVENT_TYPE.USER_CENTER.USER_LOGOUT.DONE:
            return {
                ...state,
                loginSuccess: false,
                token: DEFAULT_TOKEN,
                errMsg: '',
                errCode: '',
            };
        case LOGIN_ERROR: {
            let err = JSON.parse(action.payload);
            return {
                ...state,
                loginSuccess: false,
                errMsg: err.message,
                errCode: err.reasonCode,
                vCode: '',
            };
        }
        case SETPWD_DONE:
            return {
                ...state,
                loginSuccess: false,
                completeSet: true,
            };
        case ALERT_ERR:
            return {
                ...state,
                errMsg: action.errMsg,
                errCode: action.errCode,
            };
        case CLEAR_ERR:
            return {
                ...state,
                errMsg: '',
                errCode: '',
            };
        default:
            return state;
    }
}

module.exports = login;
