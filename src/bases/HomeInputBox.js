import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TextInput,
} from 'react-native';
import { SS, ST } from '../utils';
import * as COLOR from '../common/Colors';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

const searchBoxBg = require('../assets/images/home-search-box.png');

class HomeInputBox extends React.Component {
    render() {
        return (
            <View style={styles.searchContainer}>
                <EvilIcons
                    name="search"
                    size={22}
                    color={'#999999'}
                    style={styles.searchIcon}
                />
                <View>
                    <Text style={styles.placeholder}>
                        请输入企业名称、人名等信息
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchContainer: {
        height: SS(57),
        borderRadius: SS(4),
        backgroundColor: 'white',
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        marginRight: SS(26),
        marginLeft: SS(26),
        marginTop: SS(35),
    },
    searchIcon: {
        marginLeft: SS(21),
        marginRight: SS(9),
    },
    search: {
        flex: 1,
        borderRadius: SS(4),
        height: SS(30),
        backgroundColor: 'white',
        fontSize: ST(22),
    },
    placeholder: {
        fontSize: ST(22),
        color: '#999999',
    },
});

export default HomeInputBox;
