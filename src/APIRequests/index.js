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
  console.log(id, objectComment)

  try {
    console.log(123)
    const res = await request({
      url: `/images/${id}/comments`,
      method: 'POST',
      body: { name: 'Введите имя', comment: 'Введите текст комментария' },
    })
    return Promise.resolve(res)
  } catch (error) {
    return Promise.reject(error)
  }
}
