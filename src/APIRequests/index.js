import request from '../utils/request'

export const fetchData = () =>
  request({
    url: '/',
    method: 'get',
  })
