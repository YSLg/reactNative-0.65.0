'use strict';

import {
    TOKEN_INIT_DONE,
    TOKEN_INIT_LOADING,
    TOKEN_INIT_ERROR,
    TOKEN_FRESH_ERROR,
    TOKEN_UPDATE_DONE,
    TOKEN_DELETE_DONE,
    EVENT_TYPE,
    LOGIN_DONE,
} from '../constants/types';

const initialState = {
    loading: false,
    token: {
        accessTime: '',
        refreshTime: '',
        serverTime: '',
        token: '',
        tokenType: '',
    },
    isLogin: false,
    refreshTokenFail: false,
    isLoginOut: false,
    initToken: false,
    initTokenFail: false,
    deleteTokenDone: false,
    isFirst: false,
};

/**
 * token 初始化完成处理函数
 * @param {object} state
 * @param {object} action
 * @returns {object}
 */
function tokenInitDone(state, action) {
    let data = {
        accessTime: '',
        refreshTime: '',
        serverTime: '',
        token: '',
        tokenType: '',
    };

    let initToken = false;
    let initTokenFail = false;
    if (action.payload && action.payload.token) {
        data = action.payload.token;
        initToken = true;
    } else {
        initTokenFail = true;
    }
    return {
        ...state,
        initToken: initToken,
        initTokenFail: initTokenFail,
        refreshTokenFail: false,
        deleteTokenDone: false,
        token: data,
    };
}

function tokenUpdateDone(state, action) {
    let isLogin = false;
    const data = action.token;
    if (data) {
        if (data.tokenType === 'AUTHEDUSER') {
            isLogin = true;
        }
    }

    return {
        ...state,
        isLogin: isLogin,
        isLoginOut: false,
        loading: false,
        initTokenFail: false,
        refreshFail: false,
    };
}

function token(state = initialState, action) {
    switch (action.type) {
        case TOKEN_INIT_DONE:
            return tokenInitDone(state, action);
        case TOKEN_UPDATE_DONE:
            return tokenUpdateDone(state, action);
        case TOKEN_INIT_ERROR:
            console.log('[TOKEN] 获取API出错', action.payload);
            return {
                ...state,
                token: {
                    accessTime: '',
                    refreshTime: '',
                    serverTime: '',
                    token: '',
                    tokenType: '',
                },
                initTokenFail: true,
                refreshTokenFail: false,
                isLogin: false,
                loading: false,
            };
        case TOKEN_INIT_LOADING:
            return {
                ...state,
                loading: true,
            };
        case TOKEN_FRESH_ERROR:
            return {
                ...state,
                loading: false,
                token: {
                    accessTime: '',
                    refreshTime: '',
                    serverTime: '',
                    token: '',
                    tokenType: '',
                },
                isLogin: false,
                initTokenFail: false,
                refreshTokenFail: true,
            };
        case EVENT_TYPE.USER_CENTER.USER_LOGOUT.DONE:
            return {
                ...state,
                isLogin: false,
                loading: false,
                isLoginOut: true,
                deleteTokenDone: false,
                initTokenFail: false,
                refreshTokenFail: false,
            };
        case TOKEN_DELETE_DONE:
            return {
                ...state,
                deleteTokenDone: true,
                initTokenFail: false,
                refreshTokenFail: false,
            };
        case 'SetFirst': {
            return {
                ...state,
                isFirst: true,
            };
        }
        default:
            return state;
    }
}

module.exports = token;
