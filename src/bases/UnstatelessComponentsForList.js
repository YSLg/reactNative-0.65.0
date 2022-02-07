import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SS, ST } from '../utils';
import * as COLORS from '../common/Colors';

export const SubInfoText = props => {
    const styles = StyleSheet.create({
        subInfoText: {
            fontSize: ST(22),
            color: COLORS.MColor.COLOR_273041,
            lineHeight: SS(36),
        },
        subInfoVal: {
            color: COLORS.SColor.COLOR_808498,
        },
    });
    return (
        <Text style={styles.subInfoText}>
            {props.label}：<Text style={styles.subInfoVal}>{props.val}</Text>
        </Text>
    );
};

export const YBox = props => {
    const styles = StyleSheet.create({
        round: {
            paddingHorizontal: SS(props.HP || 11),
            paddingVertical: SS(props.VP || 7),
            borderWidth: 1,
            borderColor: COLORS.SColor.COLOR_E9B567,
        },
        roundText: {
            color: COLORS.SColor.COLOR_E9B567,
            fontSize: ST(20),
        },
    });
    return (
        <View style={styles.round}>
            <Text style={styles.roundText}>{props.data}</Text>
        </View>
    );
};
