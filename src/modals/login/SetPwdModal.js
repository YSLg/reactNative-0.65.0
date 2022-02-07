/**
 * add by li 2018-12-27
 * 设置密码页面
 * 1、首次使用用户，验证码登陆之后跳至该页面强制要求设置密码，进入该页面
 * 2、忘记密码 -> 验证码（输入密码重置验证码）-> 该页面
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
import { createUser, setPwd, closeModal } from '../../actions/loginAction';
import * as COLOR from '../../common/Colors';
import { connect } from 'react-redux';
import { SS, ST, isAndroid } from '../../utils';
import BlockButton from '../../bases/BlockButton';
import HFSafeAreaView from '../../bases/HFSafeAreaView';

class SetPwdModal extends Component {
    constructor() {
        super();
        this.state = {
            inputPwd: '',
            btnState: true,
            showPwd: false,
        };
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

    _setPwdSubmit() {
        const mobile = this.props.mobile;
        const type = this.props.vCodeType;
        const code = this.props.navigation.getParam('vcode');
        console.log('setPwdModal-_setPwdSubmit', `${mobile}, ${type}, ${code}`);
        switch (type) {
            case 'register':
                this._newUser(mobile, code, this.state.inputPwd);
                break;
            case 'setPwd':
                this._setPwd(mobile, code, this.state.inputPwd);
                break;
            default:
                return;
        }
    }

    _newUser(mobile, code, pwd) {
        this.props.dispatch(createUser(mobile, code, pwd));
    }

    _setPwd(mobile, code, pwd) {
        this.props.dispatch(setPwd(mobile, code, pwd));
    }

    _closeModal() {
        this.props.dispatch(closeModal());
        this.props.navigation.navigate('VerifyCodeModal', {
            getCode: true,
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loginSuccess) {
            this.props.navigation.navigate('tab');
        }
        if (!nextProps.loginSuccess && nextProps.completeSet) {
            this.props.navigation.navigate('LoginByPwdModal', {
                mobile: this.props.mobile,
            });
        }
        if (nextProps.vCodeStatus) {
            console.log(
                'VerifyCodeModal --- LoginByCodeModal',
                `${nextProps.vCode}, ${nextProps.vCodeStatus} `
            );
            this.props.navigation.navigate('VerifyCodeModal');
        }
    }

    render() {
        return (
            <HFSafeAreaView style={{ backgroundColor: '#ffffff' }}>
                <View style={{ flex: 1 }}>
                    <StatusBar
                        hidden={isAndroid()}
                        translucent={isAndroid()}
                        backgroundColor="white"
                        barStyle="dark-content"
                    />
                    <TouchableWithoutFeedback
                        onPress={this._closeModal.bind(this)}
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
                                color: COLOR.MColor.COLOR_273041,
                            }}
                        >
                            请设置密码
                        </Text>
                        <View
                            style={[
                                { marginTop: SS(35) },
                                styles.inputView,
                                styles.spaceBetween,
                            ]}
                        >
                            <TextInput
                                style={styles.inputText}
                                autoFocus={true}
                                placeholder="请输入密码"
                                placeholderTextColor={
                                    COLOR.SpecColor.COLOR_DCDDE4
                                }
                                secureTextEntry={
                                    this.state.showPwd ? false : true
                                }
                                maxLength={10}
                                onChangeText={this._changePwd.bind(this)}
                                value={this.state.inputPwd}
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
                                title="下一步"
                                disabled={this.state.btnState}
                                onPress={this._setPwdSubmit.bind(this)}
                            />
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
});
const eyeBtn = require('../../assets/images/hide.png');
const eyeOpenBtn = require('../../assets/images/open.png');
const backBtn = require('../../assets/images/back.png');

export default connect(state => {
    return {
        loginSuccess: state.login.loginSuccess,
        errMsg: state.login.errMsg,
        errCode: state.login.errCode,
        vCodeType: state.login.vCodeType,
        vCode: state.login.vCode,
        vCodeStatus: state.login.vCodeStatus,
        mobile: state.login.mobile,
        completeSet: state.login.completeSet,
    };
})(SetPwdModal);
