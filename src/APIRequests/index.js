import request from '../utils/request'

export const fetchDataPhotos = () =>
  request({
    url: '/images',
    method: 'get',
  })
export const fetchCommentsPhoto = (id) => {
  request({
    url: `/images/${id}`,
    method: 'get',
  })
}
