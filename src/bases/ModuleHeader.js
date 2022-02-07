import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import { SS, ST } from '../utils';

export default class ModuleHeader extends PureComponent {
    static propTypes = {
        title: PropTypes.string,
        icon: PropTypes.number,
        iconWidth: PropTypes.number,
        iconHeight: PropTypes.number,
    };

    static defaultProps = {
        title: '',
        icon: null,
        iconWidth: SS(21),
        iconHeight: SS(21),
    };

    render() {
        const { title, icon, iconWidth, iconHeight } = this.props;
        return (
            <View
                style={{
                    height: SS(59),
                    alignItems: 'center',
                    flexDirection: 'row',
                    backgroundColor: 'white',
                    marginTop: SS(12),
                    paddingLeft: SS(27),
                    borderBottomWidth: SS(2),
                    borderBottomColor: '#F0F1F2',
                }}
            >
                <Image
                    source={icon}
                    style={{ width: iconWidth, height: iconHeight }}
                />
                <Text
                    style={{
                        fontSize: ST(25),
                        color: '#273041',
                        marginLeft: SS(10),
                    }}
                >
                    {title}
                </Text>
            </View>
        );
    }
}
