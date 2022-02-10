import React, {useContext} from 'react';
import {View, Button, Text} from 'react-native';
import fontElloConfig from '../../assets/fonts/config.json';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import home from '../../pages/home';
import mine from '../../pages/mine';
import focus from '../../pages/follow';
import * as COLOR from '../../common/Colors';
import { ST, SS } from '../../utils';


const IonIcons = createIconSetFromFontello(fontElloConfig);
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'home') {
            iconName = focused ? 'home-selected' : 'home';
          } else if (route.name === 'focus') {
            iconName = focused ? 'focus-selected' : 'focus';
          } else if (route.name === 'mine') {
            iconName = focused ? 'mine-selected' : 'mine';
          }
          return <IonIcons name={iconName} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#4a5377',
        inactiveTintColor: COLOR.SColor.COLOR_808498,
        indicatorStyle: {
          height: 0, // tabbar 下面的一条线不显示
        },
        labelStyle: {
          fontSize: ST(15),
          position: 'relative',
          top: SS(-6),
        },
        style: {
          height: SS(76),
        },
        tabStyle: {
          marginTop: 0,
        },
        showIcon: true,
      }}>
      <Tab.Screen
        name="home"
        component={home}
        options={{
          tabBarLabel: '首页',
        }}
      />
      <Tab.Screen
        name="focus"
        component={focus}
        options={{
          tabBarLabel: '关注',
        }}
      />
      <Tab.Screen
        name="mine"
        component={mine}
        options={{
          tabBarLabel: '我的',
        }}
      />
    </Tab.Navigator>
  );
};

export {HomeTabs};
