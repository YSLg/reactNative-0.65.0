'use strict';
import React from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicator,
    Dimensions,
    Text,
    Animated,
    Easing,
} from 'react-native';
import PropTypes from 'prop-types';
import { SS, ST } from '../utils';

const { width, height } = Dimensions.get('window');
class SpinLoading extends React.PureComponent {
    //旋转方法
    constructor(props) {
        super(props);
        this.state = {};
    }

    /**
     * 通用遮罩loading
     * @returns {View}
     */
    render() {
        if (!this.props.show) {
            return null;
        } else {
            return (
                <View style={styles.mainContainer}>
                    <View style={styles.mask} />
                    <View style={styles.box}>
                        <ActivityIndicator
                            size="large"
                            color="white"
                            style={styles.images}
                        />
                        <Text style={styles.txt}>加载中...</Text>
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        position: 'absolute',
        width: width,
        height: height,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mask: {
        backgroundColor: 'rgba(0,0,0,0.4);',
        position: 'absolute',
        width: width,
        height: height,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    box: {
        position: 'absolute',
        width: SS(204),
        height: SS(206),
        borderRadius: SS(15),
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    images: {
        width: SS(72),
        height: SS(72),
        marginBottom: SS(25),
    },
    txt: {
        color: 'white',
        fontSize: ST(25),
    },
});

SpinLoading.propTypes = {
    onLoading: PropTypes.func,
    onError: PropTypes.func,
    onSuccess: PropTypes.func,
    show: PropTypes.bool,
};

SpinLoading.defaultProps = {
    onLoading: () => {},
    onError: () => {},
    onSuccess: () => {},
    show: false,
};
export default SpinLoading;
