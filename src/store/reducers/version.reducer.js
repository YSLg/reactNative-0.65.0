/**
 * create by zch, 2018/12/25 fzgdrz
 */
'use strict';

import {
    VERSION_GET_DONE,
    VERSION_GET_LOADING,
    VERSION_GET_ERROR,
} from '../constants/types';
const initialState = {
    hintType: 3,
    hintMsg: '',
    downloadUrl: '',
    versionNumber: '1.0.0',
};

/**
 * 版本更新相关
 * @param { object } state old状态
 * @param { object } action 事件
 * @return { object } new state
 */
function version(state = initialState, action) {
    switch (action.type) {
        case VERSION_GET_DONE:
            return {
                ...state,
                hintType: action.payload.data.hintType,
                hintMsg: action.payload.data.hintMsg,
                downloadUrl: action.payload.data.downloadUrl,
                versionNumber: action.payload.data.versionNumber,
            };
        default:
            return state;
    }
}

module.exports = version;
