'use strict';

import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    Text,
    Picker,
} from 'react-native';
import PropTypes from 'prop-types';
import { SS, ST } from '../utils';
import * as COLOR from '../common/Colors';
import PickerComponent from '../bases/PickerComponent';
const filterDownImg = require('../assets/images/filter_down.png');

class SwitchPop extends React.Component {
    /**
     * 创建通用模块
     * @returns {View}
     */
    render() {
        const { data } = this.props;
        return (
            <View style={style.mainContainer}>
                <TouchableOpacity
                    onPress={() => {
                        this.showPicker();
                    }}
                >
                    <View style={style.current}>
                        <Text style={style.curText}>2019年</Text>
                        <Image
                            source={filterDownImg}
                            style={[
                                style.icon,
                                // sort_filter_status
                                //     ? { transform: [{ rotateY: '180deg' }] }
                                //     : null,
                            ]}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        );
    }

    showPicker() {
        const data = ['2019', '2018', '2017', '2016'];
        PickerComponent.pickerTitleText = '';
        PickerComponent.pickerConfirmBtnText = '确定';
        PickerComponent.pickerCancelBtnText = '取消';
        PickerComponent.pickerConfirmBtnColor = COLOR.ColorArray.COLOR_5E7AB1;
        PickerComponent.pickerCancelBtnColor = COLOR.ColorArray.COLOR_808498;
        PickerComponent.pickerFontColor = COLOR.ColorArray.COLOR_273041;

        PickerComponent.show(data, ['2019'], () => {});
    }
}

const style = StyleSheet.create({
    mainContainer: {},
    current: {
        height: SS(73),
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: SS(15),
    },
    curText: {
        color: '#273041',
        fontSize: ST(22),
    },
    icon: {
        width: SS(20),
        height: SS(11),
        alignSelf: 'center',
        marginLeft: SS(8),
        transform: [{ rotateX: '180deg' }],
    },
});

SwitchPop.propTypes = {
    data: PropTypes.object,
    onChange: PropTypes.func,
};

SwitchPop.defaultProps = {
    data: {
        values: [],
        text: [],
    },
    onChange: function() {},
};
export default SwitchPop;
