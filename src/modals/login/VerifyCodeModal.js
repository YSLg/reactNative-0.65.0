/**
 * add by li 2018-12-27
 * 输入验证码页面
 * 1、登陆验证码；loginByCodeModal->此页面 用户存在获取登陆验证码
 * 2、注册验证码；loginByCodeModal->此页面 用户不存在获取注册验证码
 * 3、密码重置验证码；inputMobileModal->此页面
 */
import React, { Component } from 'react';
import {
    Text,
    StatusBar,
    TouchableWithoutFeedback,
    View,
    StyleSheet,
    TextInput,
    Image,
} from 'react-native';
import {
    loginWithCode,
    closeModal,
    getVerifyCode,
    clearErr,
} from '../../actions/loginAction';
import { connect } from 'react-redux';
import { SS, ST, isAndroid } from '../../utils';
import * as COLOR from '../../common/Colors';
import HFSafeAreaView from '../../bases/HFSafeAreaView';
import SpinLoading from '../../bases/SpinLoading';
import { updateToken } from '../../actions/tokenAction';
import Token from '../../common/Token';

class VerifyCodePage extends Component {
    constructor() {
        super();
        this.state = {
            inputCode: '',
            getNewCode: false,
            count: 59,
            loading: false,
        };
        this.timer = 0;
    }

    _handleTimer() {
        if (this.state.getNewCode) {
            return;
        }
        console.log('_handleTimer');
        clearInterval(this.timer);
        let count = this.state.count;
        this.timer = setInterval(() => {
            this.setState(
                {
                    count: count--,
                },
                () => {
                    if (count === 0) {
                        clearInterval(this.timer);
                        this.setState({
                            getNewCode: true,
                            count: 59,
                        });
                        this.timer = 0;
                    }
                }
            );
        }, 1000);
    }

    _getCode() {
        this.setState({
            inputCode: '',
            getNewCode: false,
        });
        this.props.dispatch(closeModal());
        const mobile = this.props.mobile;
        const type = this.props.vCodeType;
        this.props.dispatch(getVerifyCode(mobile, type));
        this._handleTimer();
    }

    _loginByCode(mobile, text) {
        // console.log(
        //     'verifyCodeModal-_loginByCode',
        //     `${mobile}, ${text}，${this.props.type}`
        // );
        this.props.dispatch(loginWithCode(mobile, text));
    }

    _gotoSetPwdModal(text) {
        // console.log('verifyCodeModal-_gotoSetPwdModal');
        this.props.navigation.navigate('SetPwdModal', {
            vcode: text,
        });
    }

    _changeCode = text => {
        this.setState({
            inputCode: text,
        });
        // 验证码输入完成
        const type = this.props.vCodeType;
        const mobile = this.props.mobile;
        if (text.length < 4) {
            return;
        }
        console.log(
            'verifyCodeModal-_changeCode',
            `${mobile}, ${type}, ${text}`
        );
        switch (type) {
            case 'register':
            case 'setPwd':
                this._gotoSetPwdModal(text);
                break;
            case 'login':
                this.setState({ loading: true }, () => {
                    this._loginByCode(mobile, text);
                });

                break;
            default:
                return;
        }
    };

    _closeModal() {
        this.props.dispatch(closeModal());
        this.props.navigation.goBack();
    }

    componentDidMount() {
        console.log(
            'verifyCodeModal-componentWillMount',
            `${this.props.vCodeStatus}, ${this.props.vCode}`
        );
        if (this.props.vCodeStatus) {
            this._handleTimer();
        }
    }

    async componentWillReceiveProps(nextProps) {
        console.log('verifyCodeModal-componentWillReceiveProps');
        if (nextProps.vCodeStatus) {
            this._handleTimer();
        }
        if (nextProps.loginSuccess) {
            console.log('start to update token', nextProps.token);
            this.props.navigation.navigate('tab');
        }
        if (nextProps.errMsg) {
            this.state.getNewCode = true;
        }
        this.setState({
            inputCode: '',
            loading: false,
        });
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = 0;
    }

    render() {
        const getCode = this.props.navigation.getParam('getCode');
        return (
            <HFSafeAreaView style={{ backgroundColor: '#ffffff' }}>
                <View style={{ flex: 1 }} testID="VerifyCodeModal">
                    <StatusBar
                        hidden={isAndroid()}
                        translucent={isAndroid()}
                        backgroundColor="white"
                        barStyle="dark-content"
                    />
                    <TouchableWithoutFeedback
                        onPress={this._closeModal.bind(this)}
                        testID="VerifyCodeModal_backBtn"
                    >
                        <View>
                            <Image style={styles.closeBtn} source={backBtn} />
                        </View>
                    </TouchableWithoutFeedback>
                    <View
                        style={{
                            marginTop: SS(72),
                            marginLeft: SS(31),
                            marginRight: SS(30),
                        }}
                    >
                        <Text
                            style={{
                                fontSize: ST(51),
                                color: COLOR.MColor.COLOR_273041,
                            }}
                        >
                            请输入验证码
                        </Text>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                console.log('get focus');
                                this.textinput.focus();
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    marginTop: SS(95),
                                }}
                            >
                                <View
                                    style={[
                                        styles.codebox,
                                        {
                                            borderBottomColor:
                                                this.state.inputCode.length > 0
                                                    ? COLOR.SColor.COLOR_E9B567
                                                    : COLOR.GrayColor
                                                          .COLOR_BABDCC,
                                        },
                                    ]}
                                >
                                    <Text
                                        style={[styles.pwdText]}
                                        textAlign="center"
                                    >
                                        {this.state.inputCode[0]}
                                    </Text>
                                </View>

                                <View
                                    style={[
                                        styles.codebox,
                                        {
                                            borderBottomColor:
                                                this.state.inputCode.length > 1
                                                    ? COLOR.SColor.COLOR_E9B567
                                                    : COLOR.GrayColor
                                                          .COLOR_BABDCC,
                                        },
                                    ]}
                                >
                                    <Text
                                        style={[styles.pwdText]}
                                        selectionColor={'#EDC57E'}
                                        textAlign="center"
                                    >
                                        {this.state.inputCode[1]}
                                    </Text>
                                </View>
                                <View
                                    style={[
                                        styles.codebox,
                                        {
                                            borderBottomColor:
                                                this.state.inputCode.length > 2
                                                    ? COLOR.SColor.COLOR_E9B567
                                                    : COLOR.GrayColor
                                                          .COLOR_BABDCC,
                                        },
                                    ]}
                                >
                                    <Text
                                        style={[styles.pwdText]}
                                        selectionColor={'#EDC57E'}
                                    >
                                        {this.state.inputCode[2]}
                                    </Text>
                                </View>
                                <View
                                    style={[
                                        styles.codebox,
                                        {
                                            borderBottomColor:
                                                this.state.inputCode.length > 3
                                                    ? COLOR.SColor.COLOR_E9B567
                                                    : COLOR.GrayColor
                                                          .COLOR_BABDCC,
                                        },
                                    ]}
                                >
                                    <Text
                                        style={[styles.pwdText]}
                                        maxLength={1}
                                        selectionColor={'#EDC57E'}
                                        textAlign="center"
                                    >
                                        {this.state.inputCode[3]}
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        <TextInput
                            style={[styles.hiddenInput]}
                            ref={e => (this.textinput = e)}
                            maxLength={4}
                            editable={true}
                            keyboardType="number-pad"
                            value={this.state.inputCode}
                            autoFocus={true}
                            onChangeText={this._changeCode.bind(this)}
                        />
                        <View style={{ marginTop: SS(22) }}>
                            <Text
                                style={[styles.hintText, styles.timeHintText]}
                            >
                                {this.props.errMsg}
                            </Text>
                        </View>
                        <View
                            style={[{ marginTop: SS(22) }, styles.spaceBetween]}
                        >
                            <Text style={styles.hintText}>
                                验证码已发送至手机 {this.props.mobile}
                            </Text>
                            <Text
                                style={[styles.hintText, styles.timeHintText]}
                            >
                                {this.props.vCode}
                            </Text>
                            <Text
                                style={[styles.hintText, styles.timeHintText]}
                                onPress={this._getCode.bind(this)}
                            >
                                {this.state.getNewCode || getCode
                                    ? '重新获取验证码'
                                    : ''}
                            </Text>
                            <Text
                                style={[styles.hintText, styles.timeHintText]}
                                testID="VerifyCodeModal_count"
                            >
                                {this.state.getNewCode || getCode
                                    ? ''
                                    : this.state.count + 's'}
                            </Text>
                        </View>
                    </View>
                </View>
                <SpinLoading show={this.state.loading} />
            </HFSafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    closeBtn: {
        width: SS(25),
        height: SS(25),
        marginTop: SS(70),
        marginLeft: SS(28),
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
    timeHintText: {
        color: COLOR.SpecColor.COLOR_FF3C00,
    },
    codebox: {
        width: SS(80),
        height: SS(60),
        borderBottomColor: COLOR.GrayColor.COLOR_BABDCC,
        borderBottomWidth: 1,
    },
    pwdText: {
        width: SS(80),
        height: SS(60),
        borderBottomColor: COLOR.GrayColor.COLOR_BABDCC,
        borderBottomWidth: 1,
        fontSize: ST(39),
        paddingVertical: 0,
        paddingBottom: SS(5),
        textAlign: 'center',
    },
    hiddenInput: {
        width: SS(0),
        borderStyle: 'solid',
        color: 'transparent',
        paddingVertical: 0,
    },
});

const backBtn = require('../../assets/images/back.png');

export default connect(state => {
    return {
        loginSuccess: state.login.loginSuccess,
        errCode: state.login.errCode,
        errMsg: state.login.errMsg,
        vCode: state.login.vCode,
        vCodeType: state.login.vCodeType,
        vCodeStatus: state.login.vCodeStatus,
        mobile: state.login.mobile,
        token: state.login.token,
    };
})(VerifyCodePage);
