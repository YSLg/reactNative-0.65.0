import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { SS } from '../../utils';
import * as COLORS from '../../common/Colors';

import Header from '../../bases/Header';
import HFSafeAreaView from '../../bases/HFSafeAreaView';
import { WebView } from 'react-native-webview';
import NavigationService from '../../NavigationService';

/**
 * 协议 隐私页面
 */
class Viewer extends Component {
    render() {
        const title = NavigationService.getParam('title');
        const htmlpath = NavigationService.getParam('htmlpath');
        console.log('viewer', title, htmlpath);
        return (
            <HFSafeAreaView>
                <View style={styles.main}>
                    <Header title={title} />
                    <View
                        style={{
                            flexDirection: 'column',
                            flex: 1,
                        }}
                    >
                        <WebView
                            originWhitelist={['*']}
                            source={{ uri: htmlpath }}
                            style={{
                                flex: 1,
                                margin: SS(10),
                            }}
                        />
                    </View>
                </View>
            </HFSafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'white',
    },
    footer: {
        height: SS(80),
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        fontSize: SS(22),
        color: COLORS.MColor.COLOR_273041,
    },
});

export default Viewer;
