import request from '@/utils/request'

export function getSettings() {
  return request({
    url: '/settings',
    method: 'get'
  })
}

export function getSetting(id) {
  return request({
    url: `/setting/${id}`,
    method: 'get'
  })
}
export function addSetting(data) {
  return request({
    url: '/setting',
    method: 'post',
    data
  })
}

export function updateSetting(id, data) {
  return request({
    url: `/setting/${id}`,
    method: 'put',
    data
  })
}

export function deleteSetting(id) {
  return request({
    url: `/setting/${id}`,
    method: 'delete'
  })
}
