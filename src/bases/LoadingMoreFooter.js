/**
 * create by zcn
 * 页面列表中最下面显示的加载中
 */
'use strict';
import React from 'react';
import { View, Text } from 'react-native';
import { SS, ST } from '../utils';

class LoadingMoreFooter extends React.Component {
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.text}>加载中</Text>
            </View>
        );
    }
}
const styles = {
    view: {
        height: SS(40),
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        alignItems: 'center',
    },
};
export default LoadingMoreFooter;
