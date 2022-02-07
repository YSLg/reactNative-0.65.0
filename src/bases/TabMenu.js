'use strict';

import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SS } from '../utils';
import * as COLOR from '../common/Colors';

const tabBlueBackground = require('../assets/images/bluebg.png');

class TabMenu extends React.Component {
    renderSubMenu() {
        const { subMenu, tabLabel } = this.props;
        let subStyle = {};
        if (tabLabel !== '房地产') {
            subStyle = {
                paddingBottom: SS(16),
            };
        }

        if (subMenu) {
            return (
                <View style={[style.subMenuContainer, subStyle]}>
                    {subMenu}
                </View>
            );
        }
    }
    /**
     * 创建tab菜单
     * @returns {View}
     */
    render() {
        const { component } = this.props;
        return (
            <View style={style.mainContainer}>
                <View style={style.menuContainer}>
                    <Image
                        source={tabBlueBackground}
                        style={style.blueBackground}
                    />
                    {this.renderSubMenu()}
                </View>
                {component}
            </View>
        );
    }
}

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLOR.GrayColor.COLOR_F4F5F7,
    },
    menuContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    blueBackground: {
        top: SS(-2),
        left: 0,
        height: SS(24),
    },
    subMenuContainer: {
        flexDirection: 'column',
        paddingTop: SS(6),
        paddingBottom: SS(26),
    },
});

TabMenu.propTypes = {
    dispatch: PropTypes.func.isRequired,
    tabLabel: PropTypes.string,
    subMenu: PropTypes.element,
    component: PropTypes.element,
};

TabMenu.defaultProps = {
    tabLabel: '',
    subMenu: null,
    component: null,
};
export default connect()(TabMenu);
