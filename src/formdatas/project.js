import base from './base'
export default {
  ...base,
  projectId: '', // 项目Id
  repositorieId: '', // 仓库Id
  gitlabAddr: '', // git项目地址
  homePageDaily: '', // 日常地址
  homePagePre: '', // 预发地址
  homePageProduct: '', // 生产地址
  prd: '', // [] ?产品文档地址
  spiderA: '', // ?页面spiderA
  scopes: '', // [] ? 项目会用到的thor请求scope （根据scope获取到接口列表，需要进行过滤）
  pageStreams: '', // ?[] 页面访问流程  画流程图，根据流程图去跳转
  publickParam: '', // ?[] 项目公共参数
  getPublickParamFn: '', // ?获取公共参数的方法
  status: '' // 项目状态
}
