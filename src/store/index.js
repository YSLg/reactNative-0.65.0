import {createStore, applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root.reducer';
import requestMiddleware from './middleware/request';
import promise from './middleware/promise';
import array from './middleware/array';
import analytics from './middleware/analytics';
import htmlRequestMiddleware from './middleware/htmlRequest';

export const store = createStore(
  rootReducer,
  applyMiddleware(
    array,
    thunk,
    promise,
    requestMiddleware,
    analytics,
    createLogger,
    htmlRequestMiddleware,
  ),
);
