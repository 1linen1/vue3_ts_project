import request from "@/utils/request"

import type {loginReqType, loginRespType, userInfoRespType} from "@/api/user/type";

// 定义接口的路径
enum API {
  USER_LOGIN_URL = "/user/login",
  USER_INFO_URL = "/user/info"
}

// 登录接口
export const reqLogin = (data: loginReqType) => {
  return request.post<any, loginRespType>(API.USER_LOGIN_URL, data)
}

// 获取用户信息接口
export const reqUserInfo = () => {
  return request.get<any, userInfoRespType>(API.USER_INFO_URL)
}