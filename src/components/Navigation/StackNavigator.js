import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Feather} from '@expo/vector-icons';
import {Image} from 'react-native';
import LoginByCodeModal from '../../modals/login/LoginByCodeModal';
import LoginByPwdModal from '../../modals/login/LoginByPwdModal';
import DefaultStyles from '../../constants/defaultStyles';

const Stack = createStackNavigator();

const LoginStackNavigator = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginByCodeModal" component={LoginByCodeModal} />
      <Stack.Screen name="LoginByPwdModal" component={LoginByPwdModal} />
    </Stack.Navigator>
  );
};

export {LoginStackNavigator};
