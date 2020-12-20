import {
  ERROR,
  REQUEST_SEND_PHOTO_COMMENT,
  SUCCESS_SEND_PHOTO_COMMENT,
} from '../const'
import { sendNewCommentToServer } from '../../APIRequests'

const postNewCommentUnderPhoto = (id, objectComment) => {
  return (dispatch) => {
    dispatch({
      type: REQUEST_SEND_PHOTO_COMMENT,
    })
    sendNewCommentToServer(id, objectComment)
      .then((_) => {
        // * Т.к. статус 204, то он ничего не вернет
        dispatch({
          type: SUCCESS_SEND_PHOTO_COMMENT,
        })
      })
      .catch((_) => {
        dispatch({
          type: ERROR,
        })
      })
  }
}

export { postNewCommentUnderPhoto }
