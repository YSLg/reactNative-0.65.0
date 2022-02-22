import React, {Component} from 'react';
import {
  Text,
  StatusBar,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import {getVerifyCode, closeModal} from '../../store/actions/login.action';
import {connect} from 'react-redux';
import BlockButton from '../../bases/BlockButton';
import {SS, ST, isAndroid} from '../../utils';
import * as COLOR from '../../common/Colors';
import HFSafeAreaView from '../../bases/HFSafeAreaView';
import SpinLoading from '../../bases/SpinLoading';
import NavigationService from '../../NavigationService';

class LoginByCodeModal extends Component {
  constructor() {
    super();
    this.state = {
      btnState: true,
      inputMobile: '',
      msgPage: false,
      loading: false,
    };
  }

  componentDidMount() {
    try {
    } catch (e) {
      this.state.msgPage = false;
    }
  }

  _getCode() {
    if (this.state.loading === true) {
      return;
    }
    this.setState(
      {
        loading: true,
      },
      () => {
        this.props.dispatch(getVerifyCode(this.state.inputMobile, 'login'));
      },
    );
  }

  _closeModal() {
    this.props.dispatch(closeModal());
    this.props.navigation.navigate('Home');
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

  componentWillReceiveProps(nextProps) {
    const mobile = this.state.inputMobile;
    const errCode = nextProps.errCode;

    if (errCode === 'EU000014') {
      this.props.dispatch(getVerifyCode(mobile, 'register'));
      this.setState({
        loading: true,
      });
    }

    if (nextProps.vCodeStatus) {
      this.setState(
        {
          loading: false,
        },
        () => {
          this.props.navigation.navigate('VerifyCodeModal');
        },
      );
    }
  }

  render() {
    const {navigation} = this.props;
    // console.log('是否从msg页面过来', this.state.msgPage);
    return (
      <HFSafeAreaView style={{backgroundColor: '#ffffff'}}>
        <View style={{flex: 1}} testID="loginByCodeModal">
          <StatusBar
            hidden={isAndroid()}
            translucent={isAndroid()}
            backgroundColor={'white'}
            barStyle="dark-content"
          />

          <TouchableWithoutFeedback
            onPress={this._closeModal.bind(this)}
            testID="loginByCodeModal_closeBtn">
            <View>
              <Image style={styles.closeBtn} source={closeBtn} />
            </View>
          </TouchableWithoutFeedback>

          <View
            style={{
              marginTop: SS(72),
              marginLeft: SS(31),
              marginRight: SS(30),
            }}>
            <Text style={styles.topicText}>欢迎登录小望慧眼</Text>
            <TextInput
              style={styles.inputText}
              placeholder="请输入手机号"
              placeholderTextColor="#DCDDE4"
              keyboardType="number-pad"
              maxLength={11}
              onChangeText={this._changeMobile.bind(this)}
              value={this.state.inputMobile}
              testID="loginByCodeModal_inputMobile"
              selectionColor={'#EDC57E'}
            />
            <View style={[{marginTop: SS(16)}, styles.spaceBetween]}>
              <Text style={styles.hintText}>
                手机号验证后自动创建小望慧眼账户
              </Text>
              <Text style={[styles.hintText, styles.errorHintText]}>
                {this.props.errMsg}
              </Text>
            </View>
          </View>
          <View style={{marginTop: SS(55)}}>
            <BlockButton
              title="获取验证码"
              onPress={this._getCode.bind(this)}
              disabled={this.state.btnState}
              testID="loginByCodeModal_getCode"
            />
            <TouchableWithoutFeedback
              onPress={() =>
                navigation.navigate('LoginByPwdModal', {
                  mobile: this.state.inputMobile,
                })
              }
              testID="loginByCodeModal_nav1">
              <Text style={styles.switchToPasswordLogin}>密码登陆</Text>
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: SS(39),
              flex: 1,
              left: 0,
              right: 0,
              justifyContent: 'center',
            }}>
            <View
              style={{
                alignSelf: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: ST(21),
                  textAlign: 'center',
                  alignSelf: 'center',
                  color: '#808497',
                }}>
                登录代表您已同意
                <TouchableWithoutFeedback
                  onPress={() => {
                    NavigationService.push('Viewer', {
                      title: '用户协议',
                      htmlpath: 'https://e.51baiwang.com/doc/registry.html',
                    });
                  }}>
                  <Text
                    style={{
                      color: COLOR.SpecColor.COLOR_5E7AB1,
                    }}>
                    《用户协议》
                  </Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => {
                    NavigationService.push('Viewer', {
                      title: '隐私政策',
                      htmlpath:
                        'https://e.51baiwang.com/doc/privacy-policy.html',
                    });
                  }}>
                  <Text
                    style={{
                      color: COLOR.SpecColor.COLOR_5E7AB1,
                    }}>
                    《隐私政策》
                  </Text>
                </TouchableWithoutFeedback>
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
    marginTop: SS(30),
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
    borderBottomColor: '#BABDCC',
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
})(LoginByCodeModal);
