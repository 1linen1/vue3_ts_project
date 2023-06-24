// 1.引入Axios
import axios from "axios";

// 2.创建axios实例
let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000
});
// 3.配置请求拦截器
request.interceptors.request.use(config => {
  config.headers.Token = 'Admin Token';
  return config;
})
// 4.配置响应拦截器
request.interceptors.response.use((res) => {
  return res.data;
}, (err) => {
  let message = "";
  switch (err.response.code) {
    case 404:
      message = "请求路径出错！";
      break;
    case 403:
      message = "没有权限！";
      break;
    case 500:
      message = "服务器内部错误！";
      break;
    case 401:
      message = "Token失效！";
      break;
    default:
      message = "未知错误！请联系管理员"
  }
  ElMessage({
    type: "error",
    message
  })
  return Promise.reject(err)
})
// 5.暴露请求
export default request

