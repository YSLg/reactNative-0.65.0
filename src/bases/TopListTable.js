'use strict';

import React from 'react';
import { View, StyleSheet, Image, FlatList, Text } from 'react-native';
import PropTypes from 'prop-types';
import { SS, ST } from '../utils';
import * as COLOR from '../common/Colors';

class TopListTable extends React.Component {
    /**
     * 创建通用模块
     * @returns {View}
     */
    render() {
        const { data } = this.props;
        return (
            <View style={styles.mainContainer}>
                {data && data.length > 0 ? (
                    <FlatList
                        data={data}
                        renderItem={this.renderItem}
                        ListHeaderComponent={this.renderHeader}
                    />
                ) : (
                    this.renderEmpty()
                )}
            </View>
        );
    }

    renderEmpty() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: SS(0),
                }}
            >
                <Image
                    style={{
                        width: SS(135),
                        height: SS(113),
                        marginBottom: SS(22),
                    }}
                    source={require('../assets/images/emptyicon.png')}
                />
                <Text
                    style={{
                        color: '#8A888D',
                        alignSelf: 'center',
                        fontSize: ST(21),
                        textAlignVertical: 'center',
                    }}
                >
                    暂无数据
                </Text>
            </View>
        );
    }

    renderHeader = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: SS(89),
                    backgroundColor: 'white',
                    alignItems: 'center',
                    paddingHorizontal: SS(26),
                }}
            >
                <View style={{ flex: 1 }} />
                <View style={{ width: SS(90) }}>
                    <Text style={styles.hdtxt}>金额(万)</Text>
                </View>
                <View style={{ width: SS(80) }}>
                    <Text style={styles.hdtxt}>占比(%)</Text>
                </View>
                <View style={{ width: SS(80) }}>
                    <Text style={styles.hdtxt}>频次</Text>
                </View>
                <View style={{ width: SS(80) }}>
                    <Text style={styles.hdtxt}>占比(%)</Text>
                </View>
            </View>
        );
    };

    renderItem = ({ item, index }) => (
        <View
            style={{
                flexDirection: 'row',
                height: SS(89),
                backgroundColor: index % 2 === 0 ? '#FAFAFA' : 'white',
                alignItems: 'center',
                paddingHorizontal: SS(26),
            }}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: SS(10),
                }}
            >
                <Text
                    style={{
                        color: index < 5 ? '#F5A623' : '#9B9B9B',
                        marginRight: SS(5),
                    }}
                >
                    {(index + 1).toString().padStart(2, 0)}
                </Text>
                <Text
                    style={{ fontSize: ST(20), color: '#273041' }}
                    ellipsizeMode={'tail'}
                    numberOfLines={2}
                >
                    <Text>{item[0]}</Text>
                </Text>
            </View>
            <View style={{ width: SS(90) }}>
                <Text style={styles.subtxt}>{item[1]}</Text>
            </View>
            <View style={{ width: SS(80) }}>
                <Text style={styles.subtxt}>{item[2]}</Text>
            </View>
            <View style={{ width: SS(80) }}>
                <Text style={styles.subtxt}>{item[3]}</Text>
            </View>
            <View style={{ width: SS(80) }}>
                <Text style={styles.subtxt}>{item[4]}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    subtxt: {
        fontSize: ST(16),
        color: '#808497',
        textAlign: 'center',
    },
    hdtxt: {
        fontSize: ST(20),
        color: '#273041',
        textAlign: 'center',
    },
});

TopListTable.propTypes = {
    data: PropTypes.array,
    onChange: PropTypes.func,
};

TopListTable.defaultProps = {
    data: {
        values: [],
        text: [],
    },
    onChange: function() {},
};
export default TopListTable;
