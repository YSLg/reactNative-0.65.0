import React from 'react';
import { Text, StyleSheet } from 'react-native';
import * as COLORS from '../common/Colors';

export const HighLight = data => {
    let firstStart = data.indexOf('<em>');
    if (firstStart === -1) {
        return data;
    }
    let endEm = data.indexOf('</em>');
    return (
        <Text>
            {data.substring(0, firstStart)}
            <Text style={styles.highlight}>
                {data.substring(firstStart + 4, endEm)}
            </Text>
            {HighLight(data.substring(endEm + 5))}
        </Text>
    );
};

const styles = StyleSheet.create({
    highlight: {
        color: COLORS.SColor.COLOR_D0B172,
    },
});
