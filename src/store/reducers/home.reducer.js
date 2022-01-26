import { handleActions as createReducer } from 'redux-actions';
import { homeAction } from '../actions/home.action';
const initialState = ['13543426735876548976ghjjkhkh'];

const homeReducer = state => {
  return [...state, '122'];
};
export default createReducer(
  {
    [homeAction]: homeReducer,
  },
  initialState,
);
