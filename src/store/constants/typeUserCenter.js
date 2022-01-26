/**
 * create by zch, 2018/12/25
 **/

'use strict';

// 获取用户信息事件
const USER_INFO = {
    LOADING: 'USER_CENTER.USER_INFO_LOADING',
    DONE: 'USER_CENTER.USER_INFO_DONE',
    ERROR: 'USER_CENTER.USER_INFO_ERROR',
};

// 获取关注企业列表事件
const GET_ATTENTIONS = {
    RESET: 'USER_CENTER.GET_ATTENTIONS_RESET',
    LOADING: 'USER_CENTER.GET_ATTENTIONS_LOADING',
    DONE: 'USER_CENTER.GET_ATTENTIONS_DONE',
    ERROR: 'USER_CENTER.GET_ATTENTIONS_ERROR',
};

// 关注某个企业事件
const ADD_ATTENTION = {
    LOADING: 'USER_CENTER.ADD_ATTENTION_LOADING',
    DONE: 'USER_CENTER.ADD_ATTENTION_DONE',
    ERROR: 'USER_CENTER.ADD_ATTENTION_ERROR',
};

// 取消对某个企业关注事件
const CANCEL_ATTENTION = {
    LOADING: 'USER_CENTER.CANCEL_ATTENTION_LOADING',
    DONE: 'USER_CENTER.CANCEL_ATTENTION_DONE',
    ERROR: 'USER_CENTER.CANCEL_ATTENTION_ERROR',
};

// 用户退出登录事件
const USER_LOGOUT = {
    LOADING: 'USER_CENTER.USER_LOGOUT_LOADING',
    DONE: 'USER_CENTER.USER_LOGOUT_DONE',
    ERROR: 'USER_CENTER.USER_LOGOUT_ERROR',
};

// 在关注列表内搜索事件（本地事件)
const CHANGE_ATTENTION_SEARCHWORD = {
    CHANGED: 'USER_CENTER.ATTENTION_SEARCHWORD_CHANGED',
};

// 用户中心相关事件组合
export const USER_CENTER = {
    USER_INFO,
    GET_ATTENTIONS,
    ADD_ATTENTION,
    CANCEL_ATTENTION,
    USER_LOGOUT,
    CHANGE_ATTENTION_SEARCHWORD,
};
