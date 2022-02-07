import DeviceInfo from 'react-native-device-info';
import { TOKEN_URL, TOKEN_REFRESH_URL } from '../constants/urls';
import {
    TOKEN_INIT_LOADING,
    TOKEN_INIT_DONE,
    TOKEN_INIT_ERROR,
    TOKEN_FRESH_ERROR,
    TOKEN_UPDATE_DONE,
    TOKEN_DELETE_DONE,
} from '../constants/types';
import Token from '../../common/Token';

/**
 * 先判断token是否在有效期
 * 如果在有效期
 * 不进行initToken操作
 */
export async function initToken() {
    let token = await Token.getAccessToken();
    if (token.token === '') {
        return newToken();
    } else {
        return refreshToken();
    }
}

/**
 *  申请新的token
 * @returns {Function}
 */
export function newToken() {
    return dispatch => {
        // const params = {
        //     uuid: DeviceInfo.getUniqueID(),
        //     deviceType: DeviceInfo.getManufacturer(),
        //     deviceId: DeviceInfo.getDeviceId(),
        //     appVersion: '2.0',
        // };
        const params = {
            uuid: "1",
            deviceType: "iPhone12,3",
            deviceId: "Apple iPhone12,3",
            appVersion: "2.0",
            appId: "APP_WANDER",
            appKey: "SgM3YTQvZiwb0lx3xK6dz1k5XzMqyETK"
        };
        dispatch({
            type: 'POST',
            payload: {
                url: TOKEN_URL,
                params: params,
            },
            actions: [TOKEN_INIT_LOADING, TOKEN_INIT_DONE, TOKEN_INIT_ERROR],
        });
    };
}

/**
 * 刷新token
 * @returns {Function}
 */
export function refreshToken() {
    return dispatch => {
        const params = {
            // uuid: DeviceInfo.getUniqueID(),
            // deviceType: DeviceInfo.getManufacturer(),
            // deviceId: DeviceInfo.getDeviceId(),
            // appVersion: '2.0',
        };
        dispatch({
            type: 'POST',
            payload: {
                url: TOKEN_REFRESH_URL,
                params: params,
            },
            actions: [TOKEN_INIT_LOADING, TOKEN_INIT_DONE, TOKEN_FRESH_ERROR],
        });
    };
}

/**
 * 更新token
 * @param {object} token
 * @returns {Promise<void>}
 */
export async function updateToken(token) {
    await Token.updateAccessToken(token);
    return dispatch => {
        dispatch({
            type: TOKEN_UPDATE_DONE,
            token: token,
        });
    };
}

/**
 * 退出登录删除token
 * @returns {Promise<void>}
 */
export async function deleteToken() {
    await Token.deleteAccessToken();
    return dispatch => {
        dispatch({ type: TOKEN_DELETE_DONE });
    };
}
