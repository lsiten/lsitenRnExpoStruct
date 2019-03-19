import {fetch_json} from '../api'

export default {
  // 获取用户列表
  user_get_user_list (params) {
    return fetch_json('/user/list', params)
  }
}
