import base from './base'
export default {
  ...base,
  interfaceReqId: '', // 接口请求Id
  type: '', // 接口请求类型
  serviceUserName: '', // 后端创建者
  source: '', // 接口来源
  status: '', // 接口状态 design 设计中 unstable 不稳定 stable 稳定
  scope: '', // ?scope
  path: '', // 路径
  version: '', // ?版本号
  reqId: '', // 返回id
  resId: '', // 返回id
  defaultReqScheme: '', // 默认请求格式
  defaultResScheme: '', // 默认返回格式
  depends: '', // ？依赖  [{ interfaceId, [resId]}]
  isLoop: '', // ? 是否需要轮询
  loopPrototyep: { // 轮询属性
    times: 8, // ？轮询次数
    interval: 1500, // ? 间隔时长
    finishCondition: ''
  }
}
