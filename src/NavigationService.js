// NavigationService.js

import { NavigationActions, StackActions } from '@react-navigation/native';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
    console.log(_navigator);
}

function navigate(routeName, params, subRouteName) {
    if (subRouteName) {
        _navigator.dispatch(
            NavigationActions.navigate({
                routeName: routeName,
                params: params,
                action: NavigationActions.navigate({
                    routeName: subRouteName,
                    params: params,
                }),
            })
        );
    } else {
        _navigator.dispatch(
            NavigationActions.navigate({
                routeName,
                params,
            })
        );
    }
}

function back() {
    _navigator.dispatch(NavigationActions.back());
}

function navigation() {
    return _navigator;
}

function getParam(key) {
    let len = _navigator.state.nav.routes.length - 1;
    let curRoute = _navigator.state.nav.routes[len];
    if (curRoute.routes && curRoute.routes.length > 0) {
        console.log(curRoute);
        return curRoute.routes[curRoute.routes.length - 1].params[key];
    } else {
        return curRoute.params[key];
    }
}

function push(routeName, params, subRouteName) {
    if (subRouteName) {
        _navigator.dispatch(
            NavigationActions.navigate({
                routeName: routeName,
                params: params,
                action: StackActions.push({
                    routeName: subRouteName,
                    params: params,
                }),
            })
        );
        return;
    }
    const pushAction = StackActions.push({
        routeName,
        params,
    });
    _navigator.dispatch(pushAction);
}

function refresh() {
    console.log(_navigator);
}

// add other navigation functions that you need and export them

export default {
    navigate,
    setTopLevelNavigator,
    back,
    push,
    navigation,
    getParam: getParam,
    goBack: back,
    refresh: refresh,
};
