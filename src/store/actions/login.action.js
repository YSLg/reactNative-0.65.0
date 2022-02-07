import {
    LOGIN_LOADING,
    LOGIN_DONE,
    LOGIN_ERROR,
    SETPWD_DONE,
    MODAL_CLOSE,
    VCODE_GET_LOADING,
    VCODE_GET_DONE,
    VCODE_GET_ERROR,
    VOCDE_TYPE,
    ALERT_ERR,
    CLEAR_ERR,
} from '../constants/types';
import {
    LOGIN,
    LOGIN_BY_CODE,
    LOGIN_CODE,
    SETPWD_CODE,
    REGISTER_CODE,
    CREATE_USER,
    SETPWD,
} from '../constants/urls';

export function getVerifyCode(mobile, type) {
    let url = '';
    switch (type) {
        case 'login':
            url = LOGIN_CODE;
            break;
        case 'register':
            url = REGISTER_CODE;
            break;
        case 'setPwd':
            url = SETPWD_CODE;
            break;
        default:
            return;
    }
    return dispatch => {
        dispatch({
            type: VOCDE_TYPE,
            codeType: type,
            mobile: mobile,
        });
        dispatch({
            type: 'POST',
            payload: {
                url: url,
                params: { mobile: mobile },
            },
            actions: [VCODE_GET_LOADING, VCODE_GET_DONE, VCODE_GET_ERROR],
        });
    };
}

export function closeModal() {
    return dispatch => {
        dispatch({
            type: MODAL_CLOSE,
        });
    };
}

export function loginWithPassword(mobile, pwd) {
    return dispatch => {
        dispatch({
            type: 'POST',
            payload: {
                url: LOGIN,
                params: {
                    mobile: mobile,
                    password: pwd,
                },
            },
            actions: [LOGIN_LOADING, LOGIN_DONE, LOGIN_ERROR],
        });
    };
}

export function loginWithCode(mobile, code) {
    return dispatch => {
        dispatch({
            type: 'POST',
            payload: {
                url: LOGIN_BY_CODE,
                params: {
                    mobile: mobile,
                    code: code,
                },
            },
            actions: [LOGIN_LOADING, LOGIN_DONE, LOGIN_ERROR],
        });
    };
}

/**
 * 创建用户
 * @param mobile 手机号
 * @param code 验证码
 * @param pwd 密码
 * @returns {function(*)}
 */
export function createUser(mobile, code, pwd) {
    return dispatch => {
        dispatch({
            type: 'POST',
            payload: {
                url: CREATE_USER,
                params: {
                    mobile: mobile,
                    password: pwd,
                    code: code,
                    agreeLicence: '1',
                },
            },
            actions: [LOGIN_LOADING, LOGIN_DONE, LOGIN_ERROR],
        });
    };
}

export function setPwd(mobile, code, pwd) {
    return dispatch => {
        dispatch({
            type: 'POST',
            payload: {
                url: SETPWD,
                params: {
                    mobile: mobile,
                    password: pwd,
                    code: code,
                },
            },
            actions: [LOGIN_LOADING, SETPWD_DONE, LOGIN_ERROR],
        });
    };
}

export function alertErr(errCode, errMsg) {
    return dispatch => {
        dispatch({
            type: ALERT_ERR,
            errCode: errCode,
            errMsg: errMsg,
        });
    };
}

export function clearErr() {
    return dispatch => {
        dispatch({
            type: CLEAR_ERR,
        });
    };
}
