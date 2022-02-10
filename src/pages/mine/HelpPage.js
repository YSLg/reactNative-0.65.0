/**
 * create by zch 2018/12/19
 **/
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from '../../bases/Header';
import HFSafeAreaView from '../../bases/HFSafeAreaView';
import {SS, ST} from '../../utils';
import * as COLOR from '../../common/Colors';

const QUESTIONS = [
  {
    question: '有哪些登陆方式？如何找回密码？',
    answer:
      '用户可以通过手机注册—>设置密码—>密码登录，也可以直接通过手机验证码登录。找回密码，用户只需通过手机验证码重新设置密码即可。',
  },
  {
    question: '如何使用搜索功能？',
    answer:
      '我们提供默认搜索和快速搜索两种搜索功能，前者直接通过【首页】顶端搜索框进行输入搜索内容，也可以通过点击直接搜索ICON进行特定对象搜索，如高管、上市企业等模块。',
  },
  {
    question: '如何理解快速搜索功能？',
    answer:
      '快速搜索旨在为用户展现特定类型的搜索结果，如想了解“王健林”在哪些公司担任高管，即可通过【高管】模块进入，直接输入“王健林”即可得到结果，减少了冗余信息的干扰。',
  },
  {
    question: '小望慧眼是否收费？如何开展商户合作？',
    answer:
      '目前该产品对用户免费开放注册，用户只需接受《用户协议》和《隐私协议》即可注册并使用相关功能。收费服务暂未启动。\n相关商务合作请直接把合作意向发至邮箱（bwcloud@baiwang.com）。',
  },
];

/**
 * 用户帮助页面
 */
class HelpPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const rows = QUESTIONS.map((question, index) => {
      return this.renderRow(index + 1, question.question, question.answer);
    });
    return (
      <HFSafeAreaView>
        <View style={defaultStyles.mainContainer}>
          <Header goBack={this.props.navigation.goBack} title="用户帮助" />
          {rows}
        </View>
      </HFSafeAreaView>
    );
  }

  /**
   * 渲染一行
   * @param index
   * @param question
   * @param answer
   * @returns {*}
   */
  renderRow(index, question, answer) {
    return (
      <View style={defaultStyles.viewRow}>
        <Text style={defaultStyles.textQuestion}>
          {index}.{question}
        </Text>
        <Text style={defaultStyles.textAnswer}>{answer}</Text>
      </View>
    );
  }
}

const defaultStyles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLOR.GrayColor.COLOR_F4F5F7,
    flex: 1,
  },
  viewRow: {
    backgroundColor: '#ffffff',
    marginTop: SS(13),
    paddingTop: SS(26),
    paddingBottom: SS(26),
    paddingLeft: SS(28),
    paddingRight: SS(28),
  },
  textQuestion: {
    fontSize: ST(25),
    fontWeight: 'bold',
  },
  textAnswer: {
    fontSize: ST(22),
    color: COLOR.SpecColor.COLOR_808497,
    lineHeight: SS(31),
  },
});

export default HelpPage;
