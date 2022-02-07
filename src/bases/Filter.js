import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { SS } from '../utils';
import PropTypes from 'prop-types';
const filterIconSource = require('../assets/images/company/filter.png');
export class Filter extends React.PureComponent {
    static propsTypes = {
        onPress: PropTypes.func,
    };
    constructor(props) {
        super(props);
    }

    render() {
        console.log('render filter');
        return (
            <TouchableOpacity onPress={this.props.onPress.bind(this)}>
                <View
                    style={{
                        width: SS(59),
                        alignItems: 'center',
                        height: SS(66),
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        source={filterIconSource}
                        style={{
                            width: SS(25),
                            height: SS(24),
                        }}
                    />
                </View>
            </TouchableOpacity>
        );
    }
}
