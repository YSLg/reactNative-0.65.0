import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
    Dimensions,
    AsyncStorage,
    StatusBar,
} from 'react-native';
import React, { Component } from 'react';
// import PagerView from 'react-native-pager-view';

const { width, height } = Dimensions.get('window');
export default class GuildPage extends Component {
    render() {
        return (
            <View>
                <StatusBar
                    hidden={false}
                    barStyle="dark-content"
                    translucent={true}
                    backgroundColor={'white'}
                />
                {/* <PagerView initialPage={0} style={{ flex: 1 }}>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            style={{ width: width, height: height }}
                            source={require('../../assets/images/guild/001.1.png')}
                        />
                    </View>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            style={{ width: width, height: height }}
                            source={require('../../assets/images/guild/001.2.png')}
                        />
                    </View>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            style={{ width: width, height: height }}
                            source={require('../../assets/images/guild/001.3.png')}
                        />
                    </View>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <TouchableHighlight
                            onPress={async () => {
                                await AsyncStorage.setItem('isFirst', 'yes');
                                this.props._onPress();
                            }}
                        >
                            <Image
                                style={{ width: width, height: height }}
                                source={require('../../assets/images/guild/001.4.png')}
                            />
                        </TouchableHighlight>
                    </View>
                </PagerView> */}
            </View>
        );
    }
}
