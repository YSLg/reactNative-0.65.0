import React from 'react';
import NavigationService from '../NavigationService';
import { View, StatusBar, TouchableOpacity, Text, Image } from 'react-native';

import { SS, ST } from '../utils';
import PropTypes from 'prop-types';
/**
 * 高阶组件
 * 页面加入loading状态
 */
export default class Loading extends React.Component {
    render() {
        // const { hasError, loading } = this.props.bigData;
        let hasError = this.props.hasError,
            loading = this.props.loading;
        if (this.props.bigData) {
            // { hasError, loading } = this.props.bigData;
            hasError = this.props.bigData.hasError;
            loading = this.props.bigData.loading;
        }
        if (this.props.listBigData) {
            hasError = this.props.listBigData.hasError;
            loading =
                this.props.listBigData.loading &&
                this.props.listBigData.page === 1;
        }
        if (hasError) {
            // 如果出错，出现重新loading界面
            return (
                <View
                    style={[
                        {
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            backgroundColor: 'white',
                        },
                    ]}
                >
                    <StatusBar
                        hidden={false}
                        barStyle="dark-content"
                        translucent={true}
                        backgroundColor={'#273041'}
                    />
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            this.props.load();
                        }}
                    >
                        <Image
                            source={require('../assets/images/loadFail.png')}
                            style={{
                                width: SS(135),
                                height: SS(113),
                                marginBottom: SS(22),
                            }}
                        />
                        <Text
                            style={{
                                color: '#8A888D',
                                fontSize: ST(23),
                            }}
                        >
                            加载失败，点击重试
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        } else if (loading) {
            return (
                <View
                    style={[
                        {
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row',
                            backgroundColor: 'white',
                        },
                    ]}
                >
                    {this.props.StatusBar}
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            source={require('../assets/images/textloading.png')}
                            style={{
                                width: SS(205),
                                height: SS(44),
                                marginBottom: SS(48),
                            }}
                        />
                        <Text
                            style={{
                                color: '#E9E9E9',
                                fontSize: ST(21),
                            }}
                        >
                            看得见的商业
                        </Text>
                    </View>
                </View>
            );
        } else {
            return this.props.wrapper;
        }
    }
}

Loading.defaultProps = {
    wrapper: null,
    load: () => {},
    hasError: false,
    loading: true,
    StatusBar: (
        <StatusBar
            hidden={false}
            barStyle="light-content"
            translucent={true}
            backgroundColor={'#273041'}
        />
    ),
};

Loading.propTypes = {
    data: PropTypes.array,
    wrapper: PropTypes.object,
    load: PropTypes.func,
    hasError: PropTypes.bool,
    loading: PropTypes.bool,
    StatusBar: PropTypes.object,
};
