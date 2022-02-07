import React from 'react';
import { FlatList, InteractionManager, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import Header from '../Header';
import {
    commonApiService,
    commonApiClear,
} from '../../actions/commonApiServiceAction';
import * as COLOR from '../../common/Colors';
import NotFound from '../NotFound';
import HFSafeAreaView from '../HFSafeAreaView';
import { withNavigation } from 'react-navigation';
import Loading from '../Loading';

/**
 * 显示不可翻页的列表页面的高价组件
 * 针对消息页面使用，目前消息页面已经不再使用，所以可以先不管
 * @param apiName commonApi对象名字
 * @param WrappedComponent 被包装的显示item组件
 */
export function listPageWithoutNext(apiName, WrappedComponent) {
    return connect(state => {
        return {
            result: state.commonApi[apiName.reduceResultName],
        };
    })(
        withNavigation(
            class extends React.Component {
                constructor(props) {
                    super(props);
                    // 获取导航参数
                    const { navigation } = this.props;
                    this.eid = navigation.getParam('eid');
                    this.title = navigation.getParam('title');
                }

                componentDidMount() {
                    InteractionManager.runAfterInteractions(() => {
                        this.load();
                    });
                }

                load() {
                    //页面加载前，加载数据

                    this._getData();
                }

                componentWillUnmount() {
                    //退出页面时清空数据
                    this.props.dispatch(commonApiClear(apiName));
                }

                /**
                 * 渲染主函数
                 * @returns {*}
                 */
                render = () => {
                    return (
                        <HFSafeAreaView>
                            <View style={defaultStyles.mainContainer}>
                                <Header title={this.title} />
                                <Loading
                                    loading={
                                        this.props.result.loading &&
                                        this.props.result.page === 1
                                    }
                                    hasError={this.props.result.hasError}
                                    wrapper={this._render()}
                                    load={this.load.bind(this)}
                                />
                            </View>
                        </HFSafeAreaView>
                    );
                };

                _render = () => {
                    return (
                        <FlatList
                            data={this.props.result.list}
                            keyExtractor={this._keyExtractor}
                            renderItem={this._renderItem}
                            listEmptyComponent={this._renderEmpty}
                            onEndReachedThreshold={0.1}
                        />
                    );
                };

                /**
                 * 渲染一行
                 * @param item 行数据
                 * @returns {*}
                 */
                _renderItem = item => {
                    return (
                        <WrappedComponent
                            item={item}
                            dispatch={this.props.dispatch}
                        />
                    );
                };

                /**
                 * 数据为空时，列表渲染的提示信息
                 * @returns {*}
                 */
                _renderEmpty = () => {
                    return <NotFound />;
                };

                /**
                 * 获取数据
                 * @param append 是否是扩展方式返回数据
                 * @private
                 */
                _getData = () => {
                    this.props.dispatch(
                        commonApiService(
                            apiName,
                            {
                                ...apiName.defaultParam,
                                eid: this.eid,
                                page: 1,
                            },
                            false
                        )
                    );
                };

                /**
                 * 返回key
                 * @param item 对象
                 * @param index 序号
                 * @returns {string} keyvalue
                 * @private
                 */
                _keyExtractor = (item, index) => {
                    return index.toString();
                };
            }
        )
    );
}

const defaultStyles = StyleSheet.create({
    mainContainer: {
        backgroundColor: COLOR.GrayColor.COLOR_F4F5F7,
        flex: 1,
    },
});
