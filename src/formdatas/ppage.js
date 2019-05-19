import base from './base'
export default {
  ...base,
  pageId: '', // 页面Id
  projectId: '', // 项目Id
  components: '', // 页面组件
  pageUrl: '', // 页面url

  params: '', // 页面初始化参数
  depends: '', // ?页面初始依赖的接口请求
  spiderB: '', // 页面spiderB

  mountedStreams: '', // [streamId, streamId] 页面进入请求接口
  eventsStreams: '', // [streamId, streamId] 页面用户事件, mounted完成后一秒进行请求
  unMountedStreams: '', // [streamId, streamId] 页面卸载请求接口
  status: '' //
}
