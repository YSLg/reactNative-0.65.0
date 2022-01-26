import Toast from 'react-native-root-toast';
import { Dimensions, PixelRatio, InteractionManager } from 'react-native';
import Token from '../common/Token';
import DeviceInfo from 'react-native-device-info';

const uiWidth = 640;
const uiHeight = 1138;

/**
 * ST
 * @param {number} num
 * @returns {number}
 * @constructor
 */
export const ST = function (num) {
    let scale = Math.min(
        Dimensions.get('window').height / uiHeight,
        Dimensions.get('window').width / uiWidth
    );
    num = Math.round(
        ((num * scale + 0.5) * PixelRatio.get()) / PixelRatio.getFontScale()
    );
    return num / PixelRatio.get();
};

/**
 * SS
 * @param {number} num
 * @returns {number}
 * @constructor
 */
export const SS = function (num) {
    return (Dimensions.get('window').width * num) / uiWidth;
};

export const buildParams = function (params) {
    if (params) {
        let paramsArray = [];
        Object.keys(params).forEach((key) =>
            paramsArray.push(key + '=' + encodeURIComponent(params[key]))
        );
        return paramsArray.join('&');
    } else {
        return null;
    }
};

export const showTips = function showTips(msg, ...rest) {
    Toast.show([msg, ...rest].join(' '), {
        duration: Toast.durations.SHORT,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
    });
};

function _fetch(url, method, body, silence) {
    return new Promise(async (resolve, reject) => {
        let token = await Token.getAccessToken();
        console.log(token, 'token++++++++++__________');
        fetch(url, {
            method: method,
            body: buildParams(body),
            headers: {
                Authorization: token.token,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then((res) => res.json())
            .then((res) => {
                if (res && res.status === 200 && res.data) {
                    resolve(res.data);
                } else {
                    !silence && showTips(JSON.stringify(res), method, url);
                    reject(new Error(JSON.stringify(res)));
                }
            })
            .catch((err) => {
                !silence && showTips(err.message, method, url);
                reject(err);
            });
    });
}

export const GET = function (url, params, silence = true) {
    if (params) {
        let paramsArray = [];
        //拼接参数
        Object.keys(params).forEach((key) =>
            paramsArray.push(key + '=' + encodeURIComponent(params[key]))
        );
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&');
        } else {
            url += '&' + paramsArray.join('&');
        }
    }
    console.log('get', url);
    return _fetch(url, 'GET', {}, silence);
};

/**
 * Get方式获取html页面
 * @param url  地址
 * @param params 参数列表
 * @param silence
 * @returns {Promise<any>|Promise<*>}
 * @constructor
 */
export const GETHTML = function (url, params, silence = true) {
    if (params) {
        let paramsArray = [];
        //拼接参数
        Object.keys(params).forEach((key) =>
            paramsArray.push(key + '=' + encodeURIComponent(params[key]))
        );
        if (url.search(/\?/) === -1) {
            url += '?' + paramsArray.join('&');
        } else {
            url += '&' + paramsArray.join('&');
        }
    }
    console.log('get', url);
    return _fetchHtml(url, 'GET', {}, silence);
};

/**
 * 获取html页面
 * @param url
 * @param method
 * @param body
 * @param silence
 * @returns {Promise<any> | Promise<*>}
 * @private
 */
function _fetchHtml(url, method, body, silence = true) {
    return new Promise(async (resolve, reject) => {
        fetch(url, {
            method: method,
            body: buildParams(body),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent':
                    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36',
            },
        })
            .then((response) => resolve(response.text()))
            .catch((err) => {
                !silence && showTips(err.message, method, url);
                reject(err);
            });
    });
}

export const POST = function (url, params, silence = true) {
    console.log('post', url, params);
    return _fetch(url, 'POST', params, silence);
};

/**
 * 节流函数
 * @param {func} func 函数
 * @param {number} delay 延时毫秒
 */
export const throttle = function (func, delay = 1000) {
    let prev = Date.now();
    return function () {
        let args = arguments;
        let now = Date.now();
        console.log(now, prev, delay);
        if (now - prev >= delay) {
            func.apply(this, args);
            prev = Date.now();
        }
    };
};

/**
 * 防抖函数
 * @param {func} fn 传入函数
 * @param {number} wait 延时毫秒数
 */
export const debounce = function (fn, wait = 1000) {
    let timeout = null;
    return function () {
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        console.log(fn, wait);
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, wait);
    };
};

export const RAI = (
    fn
): { then: Function, done: Function, cancel: Function } => {
    return InteractionManager.runAfterInteractions(fn);
};

export const chopEM = function (data) {
    if (typeof data === 'string') {
        return data.replace(/<em>/g, '').replace(/<\/em>/g, '');
    }

    return data;
};

export const platform = function () {
    return DeviceInfo.getSystemName();
};

export const isAndroid = function () {
    return platform() === 'Android';
};
