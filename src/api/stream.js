import request from '@/utils/request'

export function getStreams() {
  return request({
    url: '/streams',
    method: 'get'
  })
}

export function getStream(id) {
  return request({
    url: `/stream/${id}`,
    method: 'get'
  })
}

export function addStream(data) {
  return request({
    url: '/stream',
    method: 'post',
    data
  })
}

export function updateStream(id, data) {
  return request({
    url: `/stream/${id}`,
    method: 'put',
    data
  })
}

export function deleteStream(id) {
  return request({
    url: `/stream/${id}`,
    method: 'delete'
  })
}
