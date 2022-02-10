import React, {useContext} from 'react';
import {View, Button, Text} from 'react-native';
import fontElloConfig from '../../assets/fonts/config.json';
import {createIconSetFromFontello} from 'react-native-vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import home from '../../pages/home'
import mine from '../../pages/mine'
import follow from '../../pages/follow'
const IonIcons = createIconSetFromFontello(fontElloConfig);
const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <>
      <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="首页"
        component={home}
        options={{
          tabBarLabel: '首页',
          tabBarIcon: ({color, size}) => (
            <IonIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="关注"
        component={follow}
        options={{
          tabBarLabel: '关注',
          tabBarIcon: ({color, size}) => (
            <IonIcons name="focus" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="我的"
        component={mine}
        options={{
          tabBarLabel: '我的',
          tabBarIcon: ({color, size}) => (
            <IonIcons name="mine" color={color} size={size} />
          ),
        }}
      />
      
    </Tab.Navigator>
    </>
  );
}

export {HomeTabs};
