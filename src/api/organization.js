import request from '@/utils/request'

export function getOrganizations() {
  return request({
    url: '/organizations',
    method: 'get'
  })
}

export function addOrganization(data) {
  return request({
    url: '/organization',
    method: 'post',
    data
  })
}

export function updateOrganization(id, data) {
  return request({
    url: `/organization/${id}`,
    method: 'put',
    data
  })
}

export function deleteOrganization(id) {
  return request({
    url: `/organization/${id}`,
    method: 'delete'
  })
}
