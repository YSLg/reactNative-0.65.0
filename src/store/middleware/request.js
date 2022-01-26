import * as Req from '../../utils';

/**
 * 优化请求的流程，直接提供POST的dispatch方法来请求数据
 */
const TIMEOUT = 5000; // 设置5秒超时
export default store => next => action => {
    if (!action.type) {
        next(action);
    }
    let UpperMethod = action.type.toUpperCase();
    console.log('request,--------', action);
    if (UpperMethod === 'POST' || UpperMethod === 'GET') {
        let func = Req[UpperMethod];
        let { url, params, apiName, append } = action.payload;
        let start_time = +new Date();
        let backend = action.backend;
        const [request_start, request_success, request_fail] = action.actions;
        request_start &&
            next({
                type: request_start,
                params: params,
                apiName: apiName,
                append: append,
            });
        console.log(request_start);
        Promise.race([
            func(url, params, backend),
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    reject(
                        new Error(JSON.stringify({ msg: 'request timeout' }))
                    );
                }, TIMEOUT);
            }),
        ])
            .then(res => {
                console.log('[TIME]', new Date() - start_time, 'ms');
                console.log(`[${UpperMethod}]`, res);
                request_success &&
                    next({
                        type: request_success,
                        payload: res,
                        params: params,
                        apiName: apiName,
                        append: append,
                    });
            })
            .catch(e => {
                console.log('[TIME]', new Date() - start_time, 'ms');
                console.log(`[${UpperMethod}]`, url, params, e);
                request_fail &&
                    next({
                        type: request_fail,
                        payload: e.message,
                        params: params,
                        apiName: apiName,
                        append: append,
                    });
            });
    } else {
        next(action);
    }
};
