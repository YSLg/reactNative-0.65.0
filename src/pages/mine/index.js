import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Image,
} from 'react-native';
import * as loginAction from '../../store/actions/login.action';
import * as homeAction from '../../store/actions/home.action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Header from '../../bases/Header';
import HFSafeAreaView from '../../bases/HFSafeAreaView';
import * as COLOR from '../../common/Colors';
import {SS, ST} from '../../utils';
const img_list_src = require('../../assets/images/icon_list.png');
const img_question_src = require('../../assets/images/icon_question.png');
const img_head_src = require('../../assets/images/head_portrait.png');
const img_arrow_src = require('../../assets/images/icon_arrow.png');
class Mine extends Component {
  componentDidMount() {}
  render() {
    return (
      <HFSafeAreaView>
        <View style={styles.mainContainer}>
          <Header title="我的" back={false} />
          {/*用户头像*/}
          {this.renderUserHeader()}
          <View style={styles.viewList}>
            {this.renderRow(img_question_src, '用户帮助', this._gHelp)}
            {this.renderRow(img_list_src, '关于我们', this._gAboutUs)}
          </View>
          {this.renderLogout()}
        </View>
      </HFSafeAreaView>
    );
  }
  // 渲染头像部分内容
  renderUserHeader() {
    return (
      <View style={styles.viewHead}>
        <TouchableOpacity
          onPress={this._gLogin}
          disabled={this.props.loginFlag}
          testID="minePage_login">
          <Image source={img_head_src} style={styles.imgHead} />
        </TouchableOpacity>
        <View style={styles.viewHeadName}>
          <Text style={styles.textHead}>
            {!this.props.loginFlag
              ? '请点击头像登录'
              : this.props.userInfo.mobile}
          </Text>
        </View>
      </View>
    );
  }
  /**
   * 显示一行
   * @param img 图片
   * @param title 显示的标题
   * @param eventFunc 点击处理事件函数
   * @returns {*}
   */
  renderRow(img, title, eventFunc, click = true) {
    if (click) {
      return (
        <TouchableHighlight style={styles.touchableRow} onPress={eventFunc}>
          <View style={styles.viewRow}>
            <Image source={img} style={styles.imgIcon} />
            <Text style={styles.textList}>{title}</Text>
            <Image source={img_arrow_src} style={styles.imgArrow} />
          </View>
        </TouchableHighlight>
      );
    } else {
      return (
        <View style={styles.viewRow}>
          <Image source={img} style={styles.imgIcon} />
          <Text style={styles.textList}>{title}</Text>
        </View>
      );
    }
  }
  /**
   * 根据用户登录状态渲染登录退出框
   * @returns {*}
   */
  renderLogout() {
    if (!this.props.loginFlag) {
      // 如果是未登录状态，不显示按钮
      return null;
    } else {
      return (
        <View style={styles.viewBlockButton}>
          <BlockButton
            title="退出登录"
            disabled={false}
            style={styles.blockButton}
            testID="MinePage_logout"
            onPress={this._gLogout}
          />
        </View>
      );
    }
  }
  // 点击"我的关注"事件
  _gAttention = () => {
    if (this.props.loginFlag) {
      this.props.navigation.navigate('AttentionListPage');
    }
  };

  // 点击"用户帮助"事件
  _gHelp = () => {
    this.props.navigation.navigate('HelpPage');
  };

  // 点击"关于我们"事件
  _gAboutUs = () => {
    this.props.navigation.navigate('AboutUsPage');
  };

  // 点击"头像"事件
  _gLogin = () => {
    this.props.navigation.navigate('LoginByCodeModal');
  };

  // 点击"退出登录"事件
  _gLogout = async () => {
    await this.props.dispatch(doLogout()); // 发起"退出登录"action
    this.hasLoadedUserInfo = false; // 置状态为"未登录"
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLOR.MColor.COLOR_273041,
  },
  mainContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  viewHead: {
    backgroundColor: COLOR.MColor.COLOR_273041,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: SS(174),
  },
  viewHeadName: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: SS(24),
  },
  viewList: {
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: SS(83),
    paddingLeft: SS(27),
    paddingRight: SS(29),
    borderBottomWidth: SS(2),
    backgroundColor: '#ffffff',
    borderBottomColor: COLOR.GrayColor.COLOR_F4F5F7,
  },
  viewBlockButton: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: SS(28),
  },
  blockButton: {
    width: SS(590),
  },
  touchableRow: {
    backgroundColor: COLOR.GrayColor.COLOR_F4F5F7,
  },
  imgIcon: {
    width: SS(30),
    height: SS(29),
    alignSelf: 'center',
  },
  imgArrow: {
    width: SS(11),
    height: SS(20),
  },
  imgHead: {
    width: SS(102),
    height: SS(102),
    borderRadius: SS(51),
    marginTop: SS(5),
    borderWidth: SS(2),
    borderColor: '#babdcc',
  },
  textList: {
    fontSize: ST(25),
    marginLeft: SS(17),
    textAlignVertical: 'center',
    flex: 1,
  },
  textHead: {
    fontSize: ST(25),
    color: '#ffffff',
  },
});
const mapStateToProps = state => ({
  homes: state.homes,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({...loginAction, ...homeAction}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Mine);
