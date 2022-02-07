/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
('use strict');

// Depdencies
import React from 'react';
import {store} from './store';

import {Provider} from 'react-redux';
import {StatusBar, SafeAreaView, Text} from 'react-native';

// Components

import XtyApp from './XtyApp';

function initializtion() {
  console.disableYellowBox = true;

  class Root extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
        storeCreated: false,
        storeRehydrated: false,
        store: null,
      };
    }
    render() {
      return (
        <Provider store={store}>
          <XtyApp />
        </Provider>
      );
    }
  }
  return Root;
}

export default initializtion;
