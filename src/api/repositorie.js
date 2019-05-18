import request from '@/utils/request'

export function getRepositories() {
  return request({
    url: '/repositories',
    method: 'get'
  })
}

export function addRepositorie(data) {
  return request({
    url: '/repositorie',
    method: 'post',
    data
  })
}

export function updateRepositorie(id, data) {
  return request({
    url: `/repositorie/${id}`,
    method: 'put',
    data
  })
}

export function deleteRepositorie(id) {
  return request({
    url: `/repositorie/${id}`,
    method: 'delete'
  })
}
