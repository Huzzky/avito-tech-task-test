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
      .then((data) => {
        console.log(data)
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
