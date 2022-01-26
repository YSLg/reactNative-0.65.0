/**
 * Copyright 2016 Facebook, Inc.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to
 * use, copy, modify, and distribute this software in source code or binary
 * form for use in connection with the web services and APIs provided by
 * Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use
 * of this software is subject to the Facebook Developer Principles and
 * Policies [http://developers.facebook.com/policy/]. This copyright notice
 * shall be included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE
 *
 * @flow
 */

'use strict';

import React from 'react';
import {
  StyleSheet,
  View,
  AsyncStorage,
  TouchableOpacity,
  InteractionManager,
  ImageBackground,
  Linking,
  Text,
} from 'react-native';

import {connect} from 'react-redux';

import {
  initToken,
  updateToken,
  deleteToken,
  newToken,
} from './store/actions/token.action';
import GuildPage from './pages/home/Guild';

class XtyApp extends React.Component {
  constructor() {
    super();
    this.isFirst = false;
    this.state = {
      isFirst: false,
    };
  }

  async componentDidMount() {
    AsyncStorage.getItem('isFirst').then(data => {
      if (!data) {
        this.setState({
          isFirst: false,
        });
      }
    });
    // 初始化token
    this.props.dispatch(await initToken());
    // 获取版本
    this.props.dispatch(getVersion());

    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }

  async componentWillReceiveProps(nextProps) {
    // 初始化失败或刷新token失败则重新生成token
    if (nextProps.initTokenFail || nextProps.refreshTokenFail) {
      this.props.dispatch(await deleteToken());
    }

    // 更新token
    if (nextProps.initToken && nextProps.token) {
      this.props.dispatch(await updateToken(nextProps.token));
    }

    // 退出登录 删除token, 并重新生成token
    if (nextProps.isLoginOut) {
      this.props.dispatch(await deleteToken());
    }

    if (nextProps.deleteTokenDone) {
      this.props.dispatch(await newToken());
    }

    if (nextProps.loginSuccess && nextProps.tokenData) {
      this.props.dispatch(await updateToken(nextProps.tokenData));
    }
  }

  _onPress() {
    this.setState({
      isFirst: false,
    });
  }

  renderUpdate() {
    const {downloadUrl, hintMsg} = this.props;
    let textarray = [];
    console.log(hintMsg);
    try {
      textarray = JSON.parse(hintMsg);
    } catch (e) {
      console.log(e);
    }
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          flex: 1,
          backgroundColor: 'rgba(0,0,0,0.4)',
        }}>
        14223646
      </View>
    );
  }

  render() {
    console.log('render xtyapp');
    if (this.props.hintType === 1) {
      return this.renderUpdate();
    } else {
      if (this.state.isFirst) {
        return (
          <View>
            <Text>2352634576</Text>
          </View>
        );
      } else {
        return (
          <View>
            <Text>2345324578</Text>
          </View>
        );
      }
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// XtyApp.propTypes = {
//   initToken: PropTypes.bool.isRequired,
//   refreshTokenFail: PropTypes.bool.isRequired,
//   initTokenFail: PropTypes.bool.isRequired,
//   isLoginOut: PropTypes.bool.isRequired,
//   loginSuccess: PropTypes.bool.isRequired,
//   deleteTokenDone: PropTypes.bool.isRequired,
//   token: PropTypes.object.isRequired,
//   tokenData: PropTypes.object.isRequired,
//   dispatch: PropTypes.func.isRequired,
//   hintType: PropTypes.number,
// };

export default connect(state => {
  return {
    initToken: state.token.initToken,
    token: state.token.token,
    refreshTokenFail: state.token.refreshTokenFail,
    initTokenFail: state.token.initTokenFail,
    deleteTokenDone: state.token.deleteTokenDone,
    isLoginOut: state.token.isLoginOut,
    loginSuccess: state.login.loginSuccess,
    tokenData: state.login.token,
    hintType: state.version.hintType,
    hintMsg: state.version.hintMsg,
    version: state.version.versionNumber,
    downloadUrl: state.version.downloadUrl,
  };
})(XtyApp);
