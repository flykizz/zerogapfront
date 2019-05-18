import request from '@/utils/request'

export function getPpages() {
  return request({
    url: '/ppages',
    method: 'get'
  })
}

export function addPpage(data) {
  return request({
    url: '/ppage',
    method: 'post',
    data
  })
}

export function updatePpage(id, data) {
  return request({
    url: `/ppage/${id}`,
    method: 'put',
    data
  })
}

export function deletePpage(id) {
  return request({
    url: `/ppage/${id}`,
    method: 'delete'
  })
}
