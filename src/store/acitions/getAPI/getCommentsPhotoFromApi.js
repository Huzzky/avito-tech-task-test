import { fetchCommentsPhoto } from '../../../APIRequests'
import {
  ERROR_PHOTO_COMMENT,
  REQUEST_PHOTO_COMMENT,
  SUCCESS_PHOTO_COMMENT,
} from '../../const'

const getCommentsPhotoForApi = (id) => {
  return (dispatch) => {
    dispatch({
      type: REQUEST_PHOTO_COMMENT,
    })
    fetchCommentsPhoto(id)
      .then((data) => {
        dispatch({
          type: SUCCESS_PHOTO_COMMENT,
          data,
        })
      })
      .catch((error) => {
        console.log(error)
        dispatch({
          type: ERROR_PHOTO_COMMENT,
        })
      })
  }
}

export { getCommentsPhotoForApi }