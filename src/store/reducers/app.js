import { handleActions } from 'redux-actions';
import { GET_SYSTEM_INFO_SUCCESS } from '../actions';

export default handleActions(
  {
    [GET_SYSTEM_INFO_SUCCESS](state, action) {
      return {
        ...state,
        sysInfo: action.payload,
      };
    },
  },
  {
    sysInfo: {},
  }
);
