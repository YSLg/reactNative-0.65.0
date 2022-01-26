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

    componentDidMount() {
      this.setState({
        store,
        storeCreated: true,
        storeRehydrated: true,
      });
    }

    render() {
      return (
        <SafeAreaView>
          <Provider store={store}>
            <StatusBar
              translucent={true}
              backgroundColor="red"
              barStyle="dark-content"
            />
            <XtyApp />
          </Provider>
        </SafeAreaView>
      );
    }
  }
  return Root;
}

export default initializtion;
