import api from '../../fetch/modules/demo'
import {
  ADD,
  MINUS,
  USER_SET_USERLIST
} from '../constants/counter'
export const add = () => {
  return {
    type: ADD
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}
export function user_get_user_list() {
  return dispatch => {
    return new Promise((resolve, reject) => {
      api.user_get_user_list()
        .then(res => {
          resolve(res)
        })
        .catch(listError => {
          reject(listError)
        })
    })
  }
}

// 异步的action
export function asyncAdd() {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
