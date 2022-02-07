import React from 'react';
import {
    View,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    TextInput,
    ColorPropType,
    Text,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import * as COLOR from '../common/Colors';
import NavigationService from '../NavigationService';
import Icon from 'react-native-vector-icons/Ionicons';
import { SS, ST } from '../utils';

class SearchHeader extends React.Component {
    renderRightContainer() {
        const { hasCancelButton } = this.props;
        if (hasCancelButton) {
            return (
                <TouchableOpacity
                    style={style.cancelContainer}
                    onPress={() => {
                        NavigationService.back();
                    }}
                >
                    <Text style={style.cancelText}>取消</Text>
                </TouchableOpacity>
            );
        }

        return <View style={style.emptyContainer} />;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value && nextProps.value !== '') {
            this.props.onSearch();
        }
    }

    render() {
        const {
            placeholder,
            placeholderTextColor,
            hiddenStatusBar,
            statusBarStyle,
            statusBarTranslucent,
            statusBackgroundColor,
            clearButtonMode,
            autoFocus,
            defaultValue,
            returnKeyType,
            value,
            autoCorrect,
            keyboardType,
            onFocus,
            onBlur,
            onChange,
            onChangeText,
            onEndEditing,
        } = this.props;
        return (
            <View style={style.mainContainer}>
                <StatusBar
                    hidden={hiddenStatusBar}
                    barStyle={statusBarStyle}
                    translucent={statusBarTranslucent}
                    backgroundColor={statusBackgroundColor}
                />
                <View style={style.container}>
                    <TouchableOpacity
                        onPress={() => {
                            NavigationService.back();
                        }}
                    >
                        <View style={style.goBack}>
                            <Icon
                                name="ios-arrow-back"
                                size={26}
                                color="white"
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={style.searchContainer}>
                        <EvilIcons
                            name="search"
                            size={23}
                            color={COLOR.SColor.COLOR_BABDCC}
                            style={style.searchIcon}
                        />
                        <TextInput
                            style={style.search}
                            autoFocus={autoFocus}
                            defaultValue={defaultValue}
                            clearButtonMode={clearButtonMode}
                            placeholder={placeholder}
                            onChange={onChange}
                            onChangeText={onChangeText}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onEndEditing={onEndEditing}
                            placeholderTextColor={placeholderTextColor}
                            value={value}
                            returnKeyType={returnKeyType}
                            autoCorrect={autoCorrect}
                            keyboardType={keyboardType}
                        />
                    </View>
                    {this.renderRightContainer()}
                </View>
            </View>
        );
    }
}

const style = StyleSheet.create({
    mainContainer: {
        height: SS(66),
        backgroundColor: COLOR.MColor.COLOR_273041,
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        marginBottom: SS(11),
        justifyContent: 'flex-start',
    },
    goBack: {
        width: SS(60),
        alignItems: 'center',
    },
    searchContainer: {
        flex: 1,
        height: SS(44),
        borderRadius: SS(5),
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    searchIcon: {
        marginLeft: SS(21),
        marginRight: SS(9),
    },
    search: {
        flex: 1,
        borderRadius: SS(5),
        height: SS(40),
        backgroundColor: 'white',
        fontSize: ST(22),
        paddingVertical: 0,
    },

    cancelText: {
        color: 'white',
        fontSize: ST(24),
        alignSelf: 'center',
    },
    cancelContainer: {
        justifyContent: 'center',
        width: SS(90),
        alignItems: 'center',
    },

    emptyContainer: {
        justifyContent: 'center',
        width: SS(22),
        alignItems: 'center',
    },
});

SearchHeader.propTypes = {
    placeholder: PropTypes.string.isRequired,
    placeholderTextColor: ColorPropType,
    hiddenStatusBar: PropTypes.bool,
    statusBarStyle: PropTypes.string,
    statusBarTranslucent: PropTypes.bool,
    statusBarBackgroundColor: ColorPropType,
    clearButtonMode: PropTypes.string,
    autoFocus: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    defaultValue: PropTypes.string,
    onChangeText: PropTypes.func,
    onChange: PropTypes.func,
    returnKeyType: PropTypes.string,
    value: PropTypes.string,
    autoCorrect: PropTypes.bool,
    hasCancelButton: PropTypes.bool,
    onSearch: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onEndEditing: PropTypes.func,
    keyboardType: PropTypes.string,
};

SearchHeader.defaultProps = {
    onChangeText: () => null,
    onChange: () => null,
    onSearch: () => null,
    onFocus: () => null,
    onBlur: () => null,
    onEndEditing: () => null,
    placeholder: '',
    placeholderTextColor: COLOR.SColor.COLOR_808498,
    hiddenStatusBar: false,
    statusBarStyle: 'light-content',
    statusBarTranslucent: true,
    statusBarBackgroundColor: '#000000',
    clearButtonMode: 'while-editing',
    autoFocus: true,
    autoCapitalize: 'none',
    defaultValue: '',
    returnKeyType: 'search',
    value: '',
    autoCorrect: false,
    hasCancelButton: true,
    keyboardType: 'default',
};

export default connect()(SearchHeader);
