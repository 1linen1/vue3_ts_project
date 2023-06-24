// 定义类型接口

// 登录请求类型
export interface loginReqType {
  username: string,
  password: string
}

// 登录返回类型
export interface loginRespType {
  code: number,
  data: {
    message: string,
    token: string
  }
}

interface checkUser {
  avatar: string,
  buttons: string[],
  desc: string,
  password: string,
  roles: string[],
  routes: string[],
  token: string,
  userId: number,
  username: string
}

// 获取用户信息返回类型
export interface userInfoRespType {
  code: number,
  data: {
    message: string,
    checkUser: checkUser
  }
}