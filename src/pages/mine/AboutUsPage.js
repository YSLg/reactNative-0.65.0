/**
 * create by zch 2018/12/19
 **/
import React from 'react';
import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import Header from '../../bases/Header';
import HFSafeAreaView from '../../bases/HFSafeAreaView';
import { SS, ST } from '../../utils';
import * as COLOR from '../../common/Colors';
import DeviceInfo from 'react-native-device-info';
const img_qq_src = require('../../assets/images/icon_qq.png');
const img_wechat_src = require('../../assets/images/icon_wechat.png');
const img_email_src = require('../../assets/images/icon_email.png');
const img_aboutus_src = require('../../assets/images/aboutus_bg.png');
const img_logo_src = require('../../assets/images/logo.png');

const APP_INFO = {
    appName: '小望慧眼',
    appVersion: 'V1.0',
    introduction:
        '小望慧眼，由百望股份有限公司自主研发，具有企业信息查询、票据数据分析、关系网络梳理和企业征信监控等功能的APP平台。基于大数据、数据挖掘、AI等先进技术，小望慧眼为政府、金融、保险等行业用户提供全面及时、便捷高效、深度专业的信息和增值服务。',
    // qq: '789403839',
    wechat: '百望股份',
    email: 'bwcloud@baiwang.com',
};

/**
 * 关于我们页面
 */
class AboutsUsPage extends React.Component {
    render() {
        return (
            <HFSafeAreaView>
                <View style={defaultStyles.mainContainer}>
                    <Header goBack={this.props.navigation.goBack} title="关于我们" />
                    <ImageBackground
                        source={img_aboutus_src}
                        style={defaultStyles.imgBg}
                    >
                        <Image
                            source={img_logo_src}
                            style={defaultStyles.imgHead}
                        />
                        <View style={defaultStyles.viewHeadName}>
                            <Text style={defaultStyles.textHead}>
                                {APP_INFO.appName}
                                {DeviceInfo.getVersion()}
                            </Text>
                        </View>
                    </ImageBackground>
                    <Text style={defaultStyles.textIntroduction}>
                        {APP_INFO.introduction}
                    </Text>
                    {/* <View style={defaultStyles.viewRow}>
                        <Image
                            source={img_qq_src}
                            style={defaultStyles.imgIcon}
                        />
                        <Text style={defaultStyles.textName}>QQ</Text>
                        <Text style={defaultStyles.textValue}>
                            {APP_INFO.qq}
                        </Text>
                    </View> */}
                    <View style={defaultStyles.viewRow}>
                        <Image
                            source={img_wechat_src}
                            style={defaultStyles.imgIcon}
                        />
                        <Text style={defaultStyles.textName}>微信</Text>
                        <Text style={defaultStyles.textValue}>
                            {APP_INFO.wechat}
                        </Text>
                    </View>
                    <View style={defaultStyles.viewRow}>
                        <Image
                            source={img_email_src}
                            style={defaultStyles.imgIcon}
                        />
                        <Text style={defaultStyles.textName}>邮箱</Text>
                        <Text style={defaultStyles.textValue}>
                            {APP_INFO.email}
                        </Text>
                    </View>
                </View>
            </HFSafeAreaView>
        );
    }
}

const defaultStyles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#ffffff',
        flex: 1,
    },

    viewRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: SS(83),
        paddingLeft: SS(27),
        paddingRight: SS(29),
        borderBottomWidth: SS(2),
        backgroundColor: '#ffffff',
        borderBottomColor: COLOR.GrayColor.COLOR_F4F5F7,
    },
    imgBg: {
        justifyContent: 'center',
        alignItems: 'center',
        height: SS(289),
    },
    imgHead: {
        width: SS(125),
        height: SS(125),
    },
    imgIcon: {
        width: SS(36),
        height: SS(36),
    },
    textHead: {
        fontSize: ST(25),
        paddingTop: SS(11),
        color: COLOR.MColor.COLOR_273041,
    },
    textIntroduction: {
        fontSize: ST(23),
        color: COLOR.SpecColor.COLOR_808497,
        lineHeight: SS(31),
        paddingTop: SS(29),
        paddingBottom: SS(29),
        paddingLeft: SS(29),
        paddingRight: SS(29),
        borderBottomWidth: SS(1),
        borderColor: COLOR.GrayColor.COLOR_F4F5F7,
    },
    textName: {
        paddingLeft: SS(25),
        fontSize: ST(25),
        color: COLOR.MColor.COLOR_273041,
        flex: 1,
    },
    textValue: {
        fontSize: ST(23),
        color: COLOR.MColor.COLOR_273041,
        lineHeight: SS(31),
    },
});

export default AboutsUsPage;
