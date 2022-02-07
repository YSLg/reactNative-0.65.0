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
import NoMore from '../NoMore';
import LoadingMoreFooter from '../LoadingMoreFooter';
import NavigationService from '../../NavigationService';
import HFSafeAreaView from '../HFSafeAreaView';
import { SS } from '../../utils';
import Loading from '../Loading';

/**
 * 显示可翻页的列表页面的高价组件
 * @param apiName commonApi对象名字
 * @param WrappedComponent 被包装的显示item组件
 */
export function listPageWithNext(apiName, WrappedComponent) {
    return connect(state => {
        return {
            result: state.commonApi[apiName.reduceResultName],
        };
    })(
        class extends React.Component {
            constructor() {
                super();
                this.eid = NavigationService.getParam('eid');
                this.title = NavigationService.getParam('title');
                this.moduleName = NavigationService.getParam('module');
            }

            componentDidMount() {
                //页面加载前，加载数据
                InteractionManager.runAfterInteractions(() => {
                    this.load();
                });
            }

            load() {
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
                            <Header title={this.moduleName} />
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

            _render() {
                return (
                    <FlatList
                        data={this.props.result.list}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        listEmptyComponent={this._renderEmpty}
                        ListFooterComponent={this._renderFoot}
                        onEndReachedThreshold={0.1}
                        onEndReached={this._loadMore}
                    />
                );
            }

            /**
             * 渲染一行
             * @param item 行数据
             * @returns {*}
             */
            _renderItem = item => {
                return <WrappedComponent item={item} />;
            };

            /**
             * 渲染列表的底部提示信息
             * @returns {*}
             */
            _renderFoot = () => {
                if (this._isShowHasMore()) {
                    return <LoadingMoreFooter />;
                } else if (this._isShowNoMore()) {
                    return <NoMore />;
                }
                return null;
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
            _getData = (page = 1, append = false) => {
                this.props.dispatch(
                    commonApiService(
                        apiName,
                        {
                            ...apiName.defaultParam,
                            eid: this.eid,
                            page: page,
                        },
                        append
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

            /**
             * 加载下一页数据
             * @private
             */
            _loadMore = () => {
                // 如果是最后一页，不加载
                if (this._isLastPage()) {
                    return;
                }
                // 如果正在加载中，还没有返回，不进行下一次加载，否则可能会加载重复数据
                if (this.props.result._loadingInfo.status === 'loading') {
                    return;
                }

                let page = parseInt(this.props.result.page) + 1;
                this._getData(page, true);
            };

            /**
             * 判断是否已经到最后一页
             * @returns {boolean}
             */
            _isLastPage = () => {
                // 有的接口不返回总页数，需要自己计算
                let result = this.props.result;
                let pageTotalCount = !result.pageTotalCount
                    ? Math.ceil(result.pageTotalRecord / result.pageSize)
                    : result.pageTotalCount;
                return result.page === pageTotalCount;
            };

            /**
             * 判断是否显示加载中
             * @returns {boolean}
             */
            _isShowHasMore = () => {
                //如果是加载中，不显示
                if (this.props.result._loadingInfo.status === 'loading') {
                    return false;
                }
                //如果列表为空，不显示
                if (this.props.result.list.length <= 0) {
                    return false;
                }
                //如果是最后一页，不显示加载中
                if (this._isLastPage()) {
                    return false;
                }
                //默认显示
                return true;
            };

            /**
             * 判断是否显示"没有跟多数据"
             * @returns {*}
             */
            _isShowNoMore = () => {
                //翻到了最后一页就显示
                return this._isLastPage();
            };
        }
    );
}

const defaultStyles = StyleSheet.create({
    mainContainer: {
        backgroundColor: COLOR.GrayColor.COLOR_F4F5F7,
        flex: 1,
    },
});
