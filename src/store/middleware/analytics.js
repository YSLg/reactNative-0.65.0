/**
 * 用于追踪所有的的action的变化
 */

'use strict';

import track from './track';

export default store => next => action => {
    track(action);
    return next(action);
};
