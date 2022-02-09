import * as React from 'react';
import {View, Button, Text} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginStackNavigator} from './components/Navigation/StackNavigator';
import { HomeTabs } from './components/Navigation/BottomNavigator';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  initToken,
  updateToken,
  deleteToken,
  newToken,
} from './store/actions/token.action';
const Stack = createNativeStackNavigator();
function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';
  switch (routeName) {
    case 'Feed':
      return '首页';
    case 'Profile':
      return '关注';
    case 'Account':
      return '我的';
  }
}


class APP extends React.Component {
  constructor() {
    super();
    this.isFirst = false;
    this.state = {
      isFirst: false,
    };
  }
  async componentDidMount() {
    // AsyncStorage.getItem('isFirst').then(data => {
    //     if (!data) {
    //         this.setState({
    //             isFirst: true,
    //         });
    //     }
    // });
    // 初始化token
    this.props.dispatch(await initToken());
    // 获取版本
    // this.props.dispatch(getVersion());

    // setTimeout(() => {
    //     SplashScreen.hide();
    // }, 1000);
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
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeTabs} />
          <Stack.Screen name="Login" component={LoginStackNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const mapStateToProps = state => ({
  ...state.token,
});
export default connect(mapStateToProps)(APP);
