/**
 * create by zcn
 * 页面列表如果更多数据，显示此组件
 */
'use strict';
import React from 'react';
import { Text, View } from 'react-native';
import { SS } from '../utils';

class NoMore extends React.Component {
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.text}>没有更多</Text>
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
export default NoMore;
