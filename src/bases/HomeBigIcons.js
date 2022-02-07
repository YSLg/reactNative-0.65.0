import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SS, ST } from '../utils';
import * as COLOR from '../common/Colors';

const bigIcon1 = require('../assets/images/bigicon1.png');
const bigIcon2 = require('../assets/images/bigicon2.png');
const bigIcon3 = require('../assets/images/bigicon3.png');

class HomeBigIcons extends React.Component {
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.box}>
                    <Image style={styles.image} source={bigIcon1} />
                    <Text style={styles.text}>搜人名</Text>
                </View>
                <View style={styles.box}>
                    <Image style={styles.image} source={bigIcon2} />
                    <Text style={styles.text}>搜企业</Text>
                </View>
                <View style={styles.box}>
                    <Image style={styles.image} source={bigIcon3} />
                    <Text style={styles.text}>搜品牌</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        width: SS(400),
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: SS(32),
    },
    box: {
        marginRight: SS(33),
        marginLeft: SS(33),
    },
    image: {
        width: SS(96),
        height: SS(96),
    },
    text: {
        color: COLOR.MColor.COLOR_273041,
        fontSize: ST(22),
        marginTop: SS(15),
        alignSelf: 'center',
        textAlign: 'center',
        width: SS(100),
    },
});

export default HomeBigIcons;
