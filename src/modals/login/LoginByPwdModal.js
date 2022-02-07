/**
 * add by li 2018-12-27
 * 用户名密码登陆页面
 */
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableWithoutFeedback,
    StatusBar,
} from 'react-native';

import * as COLOR from '../../common/Colors';
import { connect } from 'react-redux';
import { SS, ST, isAndroid } from '../../utils';
import BlockButton from '../../bases/BlockButton';
import { loginWithPassword, closeModal } from '../../store/actions/login.action';
import HFSafeAreaView from '../../bases/HFSafeAreaView';

class LoginByPwdModal extends Component {
    constructor() {
        super();
        this.state = {
            inputMobile: '',
            inputPwd: '',
            btnState: true,
            showPwd: false,
        };
    }

    _changeMobile(text) {
        this.setState({
            inputMobile: text,
        });
    }

    _changePwd(text) {
        if (/^[0-9A-Za-z]{6,10}$/.test(text)) {
            this.setState({
                btnState: false,
            });
        } else {
            this.setState({
                btnState: true,
            });
        }
        this.setState({
            inputPwd: text,
        });
    }

    _showPwd() {
        this.setState({
            showPwd: this.state.showPwd ? false : true,
        });
    }

    _closeModal() {
        this.props.dispatch(closeModal());
        this.props.navigation.goBack();
    }

    _loginByPwd() {
        this.props.dispatch(
            loginWithPassword(this.state.inputMobile, this.state.inputPwd)
        );
    }

    _gotoInputMobileModal() {
        this.props.dispatch(closeModal());
        this.props.navigation.navigate('InputMobileModal', {
            mobile: this.state.inputMobile,
        });
    }

    _gotoLoginByCodeModal() {
        this.props.dispatch(closeModal());
        this.props.navigation.navigate('LoginByCodeModal', {
            mobile: this.state.inputMobile,
        });
    }

    // componentWillMount() {
    //     this.setState({
    //         inputMobile: this.props.navigation.getParam('mobile'),
    //     });
    // }

    componentWillReceiveProps(nextProps) {
        // console.log('LoginByPwdModal', nextProps.loginSuccess);
        if (nextProps.loginSuccess) {
            this.props.navigation.navigate('Home');
        }
    }

    render() {
        const mobile = this.state.inputMobile;

        return (
            <HFSafeAreaView style={{ backgroundColor: '#ffffff' }}>
                <View style={{ flex: 1 }} testID="loginByPwdModal">
                    <StatusBar
                        hidden={isAndroid()}
                        translucent={isAndroid()}
                        backgroundColor="white"
                        barStyle="dark-content"
                    />
                    <TouchableWithoutFeedback
                        onPress={this._closeModal.bind(this)}
                        testID="loginByPwdModal_backBtn"
                    >
                        <View>
                            <Image style={styles.backBtn} source={backBtn} />
                        </View>
                    </TouchableWithoutFeedback>
                    <View
                        style={{
                            marginLeft: SS(30),
                            marginTop: SS(72),
                            marginRight: SS(31),
                        }}
                    >
                        <Text
                            style={{
                                fontSize: ST(51),
                                color: '#273041',
                            }}
                        >
                            登录小望慧眼
                        </Text>
                        <View style={[{ marginTop: SS(94) }, styles.inputView]}>
                            <TextInput
                                style={styles.inputText}
                                autoFocus={true}
                                placeholder={
                                    mobile && mobile.length > 0
                                        ? mobile
                                        : '请输入手机号'
                                }
                                placeholderTextColor={
                                    mobile && mobile.length > 0
                                        ? 'black'
                                        : COLOR.GrayColor.COLOR_DCDDE4
                                }
                                keyboardType="number-pad"
                                maxLength={11}
                                onChangeText={this._changeMobile.bind(this)}
                                value={this.state.inputMobile}
                                testID="loginByPwdModal_inputMobile"
                            />
                        </View>
                        <View
                            style={[
                                { marginTop: SS(35) },
                                styles.inputView,
                                styles.spaceBetween,
                            ]}
                        >
                            <TextInput
                                style={styles.inputText}
                                autoFocus={false}
                                placeholder="请输入密码"
                                secureTextEntry={
                                    this.state.showPwd ? false : true
                                }
                                placeholderTextColor={
                                    COLOR.GrayColor.COLOR_DCDDE4
                                }
                                maxLength={10}
                                onChangeText={this._changePwd.bind(this)}
                                value={this.state.inputPwd}
                                testID="loginByPwdModal_inputPwd"
                            />
                            <TouchableWithoutFeedback
                                onPress={this._showPwd.bind(this)}
                            >
                                <View>
                                    <Image
                                        style={{
                                            width: SS(31),
                                            height: SS(20),
                                        }}
                                        source={
                                            this.state.showPwd
                                                ? eyeOpenBtn
                                                : eyeBtn
                                        }
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <View
                            style={[{ marginTop: SS(16) }, styles.spaceBetween]}
                        >
                            <Text style={styles.hintText}>
                                密码为6-10位数字和字母的组合
                            </Text>
                            <Text
                                style={[styles.hintText, styles.errorHintText]}
                            >
                                {this.props.errMsg}
                            </Text>
                        </View>
                        <View style={{ marginTop: SS(55) }}>
                            <BlockButton
                                title="登陆"
                                disabled={this.state.btnState}
                                onPress={this._loginByPwd.bind(this)}
                                /*{disabled={this.props.nextBtnState}}*/
                                testID="loginByPwdModal_loginButton"
                            />
                            <View
                                style={[
                                    { marginTop: SS(27) },
                                    styles.spaceBetween,
                                ]}
                            >
                                <TouchableWithoutFeedback
                                    onPress={this._gotoLoginByCodeModal.bind(
                                        this
                                    )}
                                >
                                    <Text
                                        style={[
                                            styles.hintText,
                                            styles.switchHintText,
                                        ]}
                                    >
                                        验证码登陆
                                    </Text>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback
                                    onPress={this._gotoInputMobileModal.bind(
                                        this
                                    )}
                                    testID="loginByPwdModal_nav2"
                                >
                                    <Text
                                        style={[
                                            styles.hintText,
                                            styles.switchHintText,
                                        ]}
                                    >
                                        忘记密码
                                    </Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </View>
                </View>
            </HFSafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    backBtn: {
        width: SS(20),
        height: SS(30),
        marginTop: SS(60),
        marginLeft: SS(28),
    },
    inputText: {
        height: SS(68),
        width: SS(300),
        fontSize: ST(39),
        color: '#000',
        paddingVertical: 0,
    },
    inputView: {
        borderBottomColor: COLOR.GrayColor.COLOR_BABDCC,
        borderBottomWidth: 1,
        width: SS(577),
    },
    spaceBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    hintText: {
        height: SS(30),
        lineHeight: SS(33),
        fontWeight: '100',
        fontSize: ST(22),
        color: COLOR.SpecColor.COLOR_808497,
    },
    errorHintText: {
        color: COLOR.SpecColor.COLOR_FF3C00,
    },
    switchHintText: {
        color: COLOR.SpecColor.COLOR_5E7AB1,
    },
});
const backBtn = require('../../assets/images/back.png');
const eyeBtn = require('../../assets/images/hide.png');
const eyeOpenBtn = require('../../assets/images/open.png');

export default connect(state => {
    return {
        loginSuccess: state.login.loginSuccess,
        errMsg: state.login.errMsg,
        errCode: state.login.errCode,
    };
})(LoginByPwdModal);
