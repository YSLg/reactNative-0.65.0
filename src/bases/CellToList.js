import React from 'react';
import NavigationService from '../NavigationService';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    InteractionManager,
    Image,
} from 'react-native';
import { connect } from 'react-redux';
import {
    getSubModuleList,
    resetSubModuleData,
} from '../actions/companyCommonListAction';

import Header from './Header';
import HFSafeAreaView from './HFSafeAreaView';
import { SS, ST } from '../utils';
import * as COLORS from '../common/Colors';

import { initialModuleState } from '../constants/defaultListState';
import Loading from './Loading';

/**
 * 高阶组件
 * 将item转换成一个list列表
 */
const CellToList = ({
    backgroundColor = COLORS.GrayColor.COLOR_F4F5F7,
    reducerName,
    dataUrl,
    hideHeader = false,
} = {}) => {
    return function(WrappedComponent) {
        const styles = StyleSheet.create({
            main: {
                flex: 1,
                backgroundColor: backgroundColor,
            },
            footer: {
                height: SS(80),
                justifyContent: 'center',
                alignItems: 'center',
            },
            footerText: {
                fontSize: SS(22),
                color: COLORS.MColor.COLOR_273041,
            },
        });

        return connect((state, ownProps) => {
            console.log(
                'own props',
                ownProps.eid || ownProps.navigation.getParam('eid')
            );
            const eid = ownProps.eid || ownProps.navigation.getParam('eid');
            if (!state.commonSubModule) {
                state.commonSubModule = {};
            }
            if (!state.commonSubModule[reducerName]) {
                state.commonSubModule[reducerName] = {};
            }
            if (!state.commonSubModule[reducerName][eid]) {
                state.commonSubModule[reducerName][eid] = initialModuleState;
            }
            return {
                moduleData: state.commonSubModule[reducerName][eid],
            };
        })(
            class extends React.Component {
                constructor(props) {
                    super(props);
                    this.eid = NavigationService.getParam('eid');
                    this.title = NavigationService.getParam('title');
                    this.moduleName = NavigationService.getParam('module');
                    this.subModule = NavigationService.getParam('subModule');
                    console.log(this.eid, this.title, this.moduleName);
                }

                componentDidMount() {
                    InteractionManager.runAfterInteractions(() => {
                        this.load();
                    });
                }

                // componentWillUnmount() {
                //     this.props.dispatch(
                //         resetSubModuleData(reducerName, this.eid)
                //     );
                // }

                shouldComponentUpdate(nextProps) {
                    if (
                        nextProps.moduleData &&
                        this.eid === nextProps.moduleData.eid
                    ) {
                        return true;
                    } else {
                        return false;
                    }
                }

                async load() {
                    let options = {
                        pageSize: 20,
                        page: 1,
                    };
                    this.subModule = this.subModule;
                    await this.props.dispatch(
                        getSubModuleList(
                            this.eid,
                            dataUrl,
                            reducerName,
                            options
                        )
                    );
                }

                _render = () => {
                    return (
                        <FlatList
                            data={this.props.moduleData.list}
                            renderItem={this._renderItem}
                            initialNumToRender={20}
                            keyExtractor={(item, index) => {
                                return (
                                    this.subModule + '-key-extractor-' + index
                                );
                            }}
                            ListEmptyComponent={this.renderEmpty.bind(this)}
                            ListFooterComponent={this.renderFooter.bind(this)}
                            onEndReachedThreshold={0.1}
                            onEndReached={this.loadMore.bind(this)}
                        />
                    );
                };

                render() {
                    const { loading, hasError, page } = this.props.moduleData;
                    return (
                        <HFSafeAreaView>
                            <View style={styles.main}>
                                {hideHeader ? null : (
                                    <Header title={this.moduleName} />
                                )}
                                <Loading
                                    loading={loading && page === 1}
                                    hasError={hasError}
                                    wrapper={this._render()}
                                    load={this.load.bind(this)}
                                />
                            </View>
                        </HFSafeAreaView>
                    );
                }

                _renderItem = ({ item: data, index }) => {
                    return (
                        <WrappedComponent
                            data={data}
                            index={index.toString()}
                            dispatch={this.props.dispatch}
                        />
                    );
                };

                renderEmpty() {
                    const { loading, hasLoaded } = this.props.moduleData;
                    if (loading || hasLoaded === false) {
                        return null;
                    }
                    return (
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: SS(50),
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
                /**
                 * 显示底部的加载中的状态
                 */
                renderFooter() {
                    const { list, pageSize, hasMore } = this.props.moduleData;
                    console.log('render footer', list, pageSize, hasMore);
                    // 如果加载完成
                    if (list.length < pageSize) {
                        return null;
                    }
                    if (hasMore === false) {
                        return (
                            <View style={styles.footer}>
                                <Text style={styles.footerText}>
                                    全部加载完成
                                </Text>
                            </View>
                        );
                    }
                    // 显示加载中
                    if (hasMore) {
                        return (
                            <View style={styles.footer}>
                                <Text style={styles.footerText}>加载中</Text>
                            </View>
                        );
                    }
                }

                /**
                 * 加载更多
                 */
                loadMore() {
                    const { page, loading, hasMore } = this.props.moduleData;
                    if (loading || hasMore === false) {
                        return;
                    }
                    let options = {
                        page: page + 1,
                    };
                    this.props.dispatch(
                        getSubModuleList(
                            this.eid,
                            dataUrl,
                            reducerName,
                            options
                        )
                    );
                }
            }
        );
    };
};

export default CellToList;
