import * as Req from '../../utils';

/**
 * 获取外部网页数据的中间件
 */
const TIMEOUT = 5000; // 设置5秒超时
export default store => next => action => {
    if (!action.type) {
        next(action);
    }
    let UpperMethod = action.type.toUpperCase();
    if (UpperMethod === 'GETHTML') {
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
                    reject(new Error('request timeout'));
                }, TIMEOUT);
            }),
        ])
            .then(res => {
                // console.log('[TIME]', new Date() - start_time, 'ms');
                // console.log(`[${UpperMethod}]`, res);
                console.log(request_success);
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
                // console.log('[TIME]', new Date() - start_time, 'ms');
                // console.log(`[${UpperMethod}]`, url, params, e);
                console.log(request_fail);
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
