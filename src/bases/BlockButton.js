'use strict';
import React from 'react';
import {
    View,
    Text,
    Platform,
    StyleSheet,
    TouchableNativeFeedback,
    TouchableOpacity,
} from 'react-native';

import { ST, SS } from '../utils';
import * as COLOR from '../common/Colors';
export default class BlockButton extends React.Component {
    render() {
        const { onPress, title, disabled, testID, style } = this.props;
        const buttonStyles = [defaultStyles.button, style];
        const textStyles = [defaultStyles.text];
        if (disabled) {
            buttonStyles.push(defaultStyles.buttonDisabled);
            textStyles.push(defaultStyles.textDisabled);
        }
        const formattedTitle = title;
        const Touchable =
            Platform.OS === 'android'
                ? TouchableNativeFeedback
                : TouchableOpacity;
        return (
            <Touchable
                accessibilityRole="button"
                testID={testID}
                disabled={disabled}
                onPress={onPress}
            >
                <View style={buttonStyles}>
                    <Text style={textStyles} disabled={disabled}>
                        {formattedTitle}
                    </Text>
                </View>
            </Touchable>
        );
    }
}

const defaultStyles = StyleSheet.create({
    button: {
        backgroundColor: COLOR.SColor.COLOR_E9B567,
        width: SS(578),
        height: SS(80),
        alignSelf: 'center',
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontSize: ST(25),
    },
    buttonDisabled: {
        backgroundColor: COLOR.GrayColor.COLOR_D2D4DD,
    },
    textDisabled: {
        color: 'white',
    },
});
