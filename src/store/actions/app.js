import { createAction } from 'redux-actions';

export const GET_SYSTEM_INFO_SUCCESS = 'GET_SYSTEM_INFO_SUCCESS';

// export const asyncInc = createAction(ASYNC_INCREMENT, () => {
//   return function(dispatch) {
//     new Promise(resolve => {
//       setTimeout(() => {
//         dispatch(ASYNC_INCREMENT_SUCCESS);
//       }, 1000);
//     });
//   };
// });

export const getSysInfoSuccess = createAction(GET_SYSTEM_INFO_SUCCESS);
