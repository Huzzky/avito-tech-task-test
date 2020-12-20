import request from '../utils/request'

export const fetchDataPhotos = () =>
  request({
    url: '/images',
    method: 'get',
  })

export const fetchCommentsPhoto = async (id) => {
  try {
    const res = await request({
      url: `/images/${id}`,
      method: 'get',
    })
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}

export const sendNewCommentToServer = async (id, objectComment) => {
  try {
    const res = await request({
      method: 'post',
      url: `/images/${id}/comments`,
      data: objectComment,
    })
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}
