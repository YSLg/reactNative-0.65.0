import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import PropTypes from 'prop-types';

import { SS } from '../utils';
import * as COLOR from '../common/Colors';
import NavtoSearchHomeHoc from '../pages/home/NavtoSearchHomeHoc';
const NavText = NavtoSearchHomeHoc(Text);
class HotWordsComponent extends React.Component {
    renderWithLine(item, index) {
        const { navigation } = this.props;
        const lineIndex = 'line' + index;
        return (
            <React.Fragment key={lineIndex}>
                <View>
                    <NavText
                        style={styles.word}
                        navigation={navigation}
                        navTo="SearchSuggest"
                        searchKey={item}
                        dispatch={this.props.dispatch}
                    >
                        {item}
                    </NavText>
                </View>
                <View key={lineIndex + 100}>
                    <Text style={styles.splitLine}>|</Text>
                </View>
            </React.Fragment>
        );
    }

    renderWithoutLine(item, index) {
        const { navigation } = this.props;
        return (
            <View key={index} style={styles.wordContainer}>
                <NavText
                    style={styles.word}
                    navigation={navigation}
                    navTo="SearchSuggest"
                    searchKey={item}
                    dispatch={this.props.dispatch}
                >
                    {item}
                </NavText>
            </View>
        );
    }

    render() {
        const hotwords = this.props.data;
        return (
            <View style={styles.container}>
                <Image
                    source={require('../assets/images/ic1.png')}
                    style={styles.hotIcon}
                />
                {hotwords.map((item, index) => {
                    if (index >= 7) {
                        return null;
                    }
                    return this.renderWithoutLine(item, index);
                })}
            </View>
        );
    }
}

HotWordsComponent.defaultProps = {
    data: [],
};

HotWordsComponent.propTypes = {
    data: PropTypes.array,
};

const styles = StyleSheet.create({
    hotIcon: {
        width: SS(19),
        height: SS(24),
    },
    container: {
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: SS(45),
        width: SS(590),
    },
    word: {
        color: '#A1A1AA',
        alignSelf: 'center',
    },
});

export default HotWordsComponent;
