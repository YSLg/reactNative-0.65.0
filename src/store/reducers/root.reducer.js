import { combineReducers } from 'redux'
import homeReducer from './home.reducer';
import loginReducer from './login.reducer';
import tokenReducer from './token.reducer';
import versionReducer from './version.reducer';
export default combineReducers({
  homes: homeReducer,
  login: loginReducer,
  token: tokenReducer,
  version: versionReducer,
});