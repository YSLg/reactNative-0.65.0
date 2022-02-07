/**
 * create by zcn
 * 页面列表中如果没有数据，可显示此组件
 */
'use strict';
import React from 'react';
import { Text, View } from 'react-native';
import { SS } from '../utils';

class NotFound extends React.Component {
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.text}>没有查到相关信息</Text>
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
export default NotFound;
