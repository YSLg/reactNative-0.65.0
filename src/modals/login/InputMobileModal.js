/**
 * add by li 2018-12-27
 * 点击忘记密码跳转到输入手机号页面
 */
import React, { Component } from 'react';
import {
    Text,
    StatusBar,
    TouchableWithoutFeedback,
    View,
    StyleSheet,
    Image,
    TextInput,
} from 'react-native';
import { getVerifyCode, closeModal } from '../../actions/loginAction';
import { connect } from 'react-redux';
import BlockButton from '../../bases/BlockButton';
import { SS, ST, isAndroid } from '../../utils';
import * as COLOR from '../../common/Colors';
import HFSafeAreaView from '../../bases/HFSafeAreaView';
import Header from '../../bases/Header';

class InputMobileModal extends Component {
    constructor() {
        super();
        this.state = {
            btnState: false,
            inputMobile: '',
        };
    }

    _getResetPwdCode() {
        this.props.dispatch(getVerifyCode(this.state.inputMobile, 'setPwd'));
    }

    _changeMobile(text) {
        if (/^[0-9]{11}$/.test(text)) {
            this.setState({
                btnState: false,
            });
        } else {
            this.setState({
                btnState: true,
            });
        }
        this.setState({
            inputMobile: text,
        });
    }

    _closeModal() {
        this.props.dispatch(closeModal());
        this.props.navigation.navigate('tab');
    }

    componentWillMount() {
        this.setState({
            inputMobile: this.props.navigation.getParam('mobile'),
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.vCode && nextProps.vCodeStatus) {
            console.log(
                'VerifyCodeModal --- inputMobileModal',
                `${nextProps.vCode}, ${nextProps.vCodeStatus} `
            );
            this.props.navigation.navigate('VerifyCodeModal');
        }
    }

    render() {
        const oldMobile = this.state.inputMobile;

        return (
            <HFSafeAreaView style={{ backgroundColor: '#ffffff' }}>
                <View style={{ flex: 1 }}>
                    <StatusBar
                        hidden={isAndroid()}
                        translucent={isAndroid()}
                        backgroundColor={'white'}
                        barStyle="dark-content"
                    />
                    <TouchableWithoutFeedback
                        onPress={this._closeModal.bind(this)}
                    >
                        <View>
                            <Image style={styles.closeBtn} source={closeBtn} />
                        </View>
                    </TouchableWithoutFeedback>
                    <View
                        style={{
                            marginTop: SS(72),
                            marginLeft: SS(31),
                            marginRight: SS(30),
                        }}
                    >
                        <Text style={styles.topicText}>请输入手机号</Text>
                        <TextInput
                            style={styles.inputText}
                            // autoFocus={true}
                            placeholder={
                                oldMobile.length > 0
                                    ? oldMobile
                                    : '请输入手机号'
                            }
                            placeholderTextColor={
                                oldMobile.length > 0
                                    ? 'black'
                                    : COLOR.GrayColor.COLOR_DCDDE4
                            }
                            keyboardType="number-pad"
                            maxLength={11}
                            onChangeText={this._changeMobile.bind(this)}
                            value={this.state.inputMobile}
                        />
                        <View
                            style={[{ marginTop: SS(16) }, styles.spaceBetween]}
                        >
                            <Text style={styles.hintText}>
                                手机号验证后自动创建小望慧眼账户
                            </Text>
                            <Text
                                style={[styles.hintText, styles.errorHintText]}
                            >
                                {this.props.errMsg}
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginTop: SS(55) }}>
                        <BlockButton
                            title="获取验证码"
                            onPress={this._getResetPwdCode.bind(this)}
                            disabled={this.state.btnState}
                        />
                        {/*<TouchableWithoutFeedback*/}
                        {/*onPress={() =>*/}
                        {/*navigation.navigate('LoginByCodeModal', {*/}
                        {/*mobile: this.state.mobile,*/}
                        {/*})*/}
                        {/*}*/}
                        {/*>*/}
                        {/*<Text style={styles.switchToPasswordLogin}>*/}
                        {/*验证码登陆*/}
                        {/*</Text>*/}
                        {/*</TouchableWithoutFeedback>*/}
                    </View>
                    <View
                        style={{
                            position: 'absolute',
                            bottom: SS(39),
                            flex: 1,
                            left: 0,
                            right: 0,
                            justifyContent: 'center',
                        }}
                    >
                        <View
                            style={{
                                alignSelf: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: ST(21),
                                    textAlign: 'center',
                                    alignSelf: 'center',
                                    color: COLOR.SpecColor.COLOR_808497,
                                }}
                            >
                                登录代表您已同意《小望慧眼用户协议》《小望慧眼隐私政策》
                            </Text>
                        </View>
                    </View>
                </View>
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
    switchToPasswordLogin: {
        color: COLOR.SpecColor.COLOR_5E7AB1,
        fontSize: ST(22),
        marginTop: SS(27),
        marginLeft: SS(32),
    },
    topicText: {
        fontSize: ST(51),
        color: '#273041',
    },
    inputText: {
        height: SS(68),
        width: SS(577),
        fontSize: ST(39),
        color: '#000',
        marginTop: SS(75),
        borderBottomWidth: 1,
        borderBottomColor: COLOR.GrayColor.COLOR_BABDCC,
        paddingVertical: 0,
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
});
const closeBtn = require('../../assets/images/close.png');

export default connect(state => {
    return {
        errMsg: state.login.errMsg,
        errCode: state.login.errCode,
        vCode: state.login.vCode,
        vCodeType: state.login.vCodeType,
        vCodeStatus: state.login.vCodeStatus,
    };
})(InputMobileModal);
