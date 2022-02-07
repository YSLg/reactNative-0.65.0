import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { SS, ST } from '../utils';
import * as COLOR from '../common/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationService from '../NavigationService';
import { connect } from 'react-redux';

export class CommonHeader extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        right: PropTypes.any,
        back: PropTypes.bool,
        rightStyle: PropTypes.object,
    };

    static defaultProps = {
        title: '',
        right: null,
        back: true,
        rightStyle: null,
    };

    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.main}>
                <StatusBar
                    hidden={false}
                    barStyle="light-content"
                    translucent={true}
                    backgroundColor={'#273041'}
                />
                <View style={styles.container}>
                    {this.renderLeft()}
                    <View style={styles.inputContainer}>
                        <Text
                            style={styles.header}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {this.props.title}
                        </Text>
                    </View>
                    {this.renderRight()}
                </View>
            </View>
        );
    }

    renderRight() {
        if (this.props.right) {
            return (
                <View style={[styles.right, this.props.rightStyle]}>
                    {this.props.right}
                </View>
            );
        } else {
            return <View style={styles.right} />;
        }
    }

    renderLeft() {
        if (this.props.back === false) {
            return <View style={styles.right} />;
        }

        return (
            <TouchableOpacity
                onPress={() => {
                    NavigationService.back();
                }}
            >
                <View style={styles.goback}>
                    <Icon
                        name="ios-arrow-back"
                        size={26}
                        color="white"
                        style={styles.icon}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        height: SS(66),
        backgroundColor: COLOR.MColor.COLOR_273041,
        justifyContent: 'flex-end',
        flexDirection: 'column',
        width: '100%',
        zIndex: 500,
    },
    goback: {
        width: SS(59),
        alignItems: 'center',
        height: SS(66),
        justifyContent: 'center',
    },
    right: {
        width: SS(59),
        alignItems: 'center',
        height: SS(66),
        justifyContent: 'center',
    },
    icon: {
        alignSelf: 'center',
    },
    container: {
        height: SS(66),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputContainer: {
        height: SS(66),
        borderRadius: SS(5),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
        flex: 1,
    },
    header: {
        color: 'white',
        fontSize: ST(28),
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});

export default connect()(CommonHeader);
