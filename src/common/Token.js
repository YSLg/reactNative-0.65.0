'use strict';

import { AsyncStorage } from 'react-native';
import { TOKEN_KEY } from '../store/constants/AsyncStorageKey';

const DEFAULT_TOKEN = {
    accessTime: '',
    refreshTime: '',
    serverTime: '',
    token: '',
    tokenType: '',
};

class Token {
    constructor() {
        this.token = DEFAULT_TOKEN;
    }

    async getAccessToken() {
        if (this.token.token !== '') {
            return this.token;
        }

        try {
            let accessToken = await AsyncStorage.getItem(TOKEN_KEY);
            console.log(AsyncStorage.getItem, accessToken, '?????>>?????');
            accessToken = accessToken ? JSON.parse(accessToken) : null;
            if (!accessToken || !accessToken.token) {
                return DEFAULT_TOKEN;
            }

            this.token = accessToken;
        } catch (e) {
            return DEFAULT_TOKEN;
        }

        return this.token;
    }

    async deleteAccessToken() {
        try {
            await AsyncStorage.removeItem(TOKEN_KEY);
            this.token = DEFAULT_TOKEN;
        } catch (e) {
            console.error(e);
        }
    }

    async updateAccessToken(token) {
        try {
            await AsyncStorage.setItem(TOKEN_KEY, JSON.stringify(token));
            this.token = token;
        } catch (e) {
            console.error(e);
        }
    }
}

export default new Token();
