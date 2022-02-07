import * as React from 'react';
import {View, Button, Text} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import fontElloConfig from './assets/fonts/config.json';
import LoginByPwdModal from './modals/login/LoginByPwdModal';
import LoginByCodeModal from './modals/login/LoginByCodeModal';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginAction from './store/actions/login.action';
import * as tokenAction from './store/actions/token.action';
import AsyncStorage from '@react-native-async-storage/async-storage';


import {
  initToken,
  updateToken,
  deleteToken,
  newToken,
} from './store/actions/token.action';
const IonIcons = createIconSetFromFontello(fontElloConfig);

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
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
function FeedScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('LoginByPwdModal')}
      />
      <Button
        title="Go to CodeLogin"
        onPress={() => navigation.navigate('LoginByCodeModal')}
      />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View>
      <Text>22222222</Text>
    </View>
  );
}

function AccountScreen() {
  return (
    <View>
      <Text>22222222</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Text>3333333</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({color, size}) => (
            <IonIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: '关注',
          tabBarIcon: ({color, size}) => (
            <IonIcons name="focus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({color, size}) => (
            <IonIcons name="mine" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
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
    console.log('????>>>>>>>>>>>>>>>6666666s');
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
render () {
  return (<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeTabs}
        options={({route}) => ({
          headerTitle: getHeaderTitle(route),
        })}
      />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen
        name="LoginByPwdModal"
        options={({route}) => ({
          headerTitle: '登录',
        })}
        component={LoginByPwdModal}
      />
      <Stack.Screen
        name="LoginByCodeModal"
        options={({route}) => ({
          headerTitle: '登录',
        })}
        component={LoginByCodeModal}
      />
    </Stack.Navigator>
  </NavigationContainer>)
}
}
const mapStateToProps = state => ({
  ...state.token,
});
export default connect(mapStateToProps)(APP);