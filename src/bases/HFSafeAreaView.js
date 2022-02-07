'use strict';

import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ViewPropTypes,
    StatusBar,
} from 'react-native';
import PropTypes from 'prop-types';
import * as COLOR from '../common/Colors';
import { connect } from 'react-redux';

class HFSafeAreaView extends React.Component<Props> {
    render() {
        const { style } = this.props;
        return (
            <SafeAreaView
                {...this.props}
                style={[styleSheet.mainContainer, style]}
            />
        );
    }
}

const styleSheet = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLOR.MColor.COLOR_273041,
        marginTop: StatusBar.currentHeight,
    },
});

type Props = ViewPropTypes.ViewProps & {
    children: any,
};

HFSafeAreaView.propTypes = {
    ...ViewPropTypes,
    style: PropTypes.object,
    children: PropTypes.any,
};

HFSafeAreaView.defaultProps = {
    style: {},
    children: null,
};

export default connect()(HFSafeAreaView);
