import request from '@/utils/request'

export function getInterfaces() {
  return request({
    url: '/interfaces',
    method: 'get'
  })
}

export function addInterface(data) {
  return request({
    url: '/interface',
    method: 'post',
    data
  })
}

export function updateInterface(id, data) {
  return request({
    url: `/interface/${id}`,
    method: 'put',
    data
  })
}

export function deleteInterface(id) {
  return request({
    url: `/interface/${id}`,
    method: 'delete'
  })
}
