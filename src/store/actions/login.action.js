import {
  LOGIN_LOADING,
  LOGIN_DONE,
  LOGIN_ERROR,
  SETPWD_DONE,
  MODAL_CLOSE,
  VCODE_GET_LOADING,
  VCODE_GET_DONE,
  VCODE_GET_ERROR,
  VOCDE_TYPE,
  ALERT_ERR,
  CLEAR_ERR,
} from '../constants/types';
import {
  LOGIN,
  LOGIN_BY_CODE,
  LOGIN_CODE,
  SETPWD_CODE,
  REGISTER_CODE,
  CREATE_USER,
  SETPWD,
} from '../constants/urls';
export function getVerifyCode(mobile, type) {
  let url = '';
  switch (type) {
      case 'login':
          url = LOGIN_CODE;
          break;
      case 'register':
          url = REGISTER_CODE;
          break;
      case 'setPwd':
          url = SETPWD_CODE;
          break;
      default:
          return;
  }
  return dispatch => {
      dispatch({
          type: VOCDE_TYPE,
          codeType: type,
          mobile: mobile,
      });
      dispatch({
          type: 'POST',
          payload: {
              url: url,
              params: { mobile: mobile },
          },
          actions: [VCODE_GET_LOADING, VCODE_GET_DONE, VCODE_GET_ERROR],
      });
  };
}