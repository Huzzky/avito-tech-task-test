import {
  REQUEST_PHOTOS,
  SUCCESS_PHOTOS,
  REQUEST_PHOTO_COMMENT,
  SUCCESS_PHOTO_COMMENT,
  SELECT_PHOTO,
  ERROR,
  REQUEST_SEND_PHOTO_COMMENT,
  SUCCESS_SEND_PHOTO_COMMENT,
} from '../const'

const initialState = {
  isFetchingPhotos: false,
  isFetchingCommentsPhoto: false,
  isSendingComment: false,
  returnError: false,
  dataPhotos: [],
  dataComments: {},
  id: 0,
}

export default function PhotoAppReducer(
  state = initialState,
  { type, data, id },
) {
  switch (type) {
    case REQUEST_PHOTOS:
      return {
        ...state,
        isFetchingPhotos: true,
      }
    case SUCCESS_PHOTOS:
      return {
        ...state,
        dataPhotos: data,
        isFetchingPhotos: false,
      }
    case REQUEST_PHOTO_COMMENT:
      return {
        ...state,
        isFetchingCommentsPhoto: true,
      }
    case SUCCESS_PHOTO_COMMENT:
      return {
        ...state,
        dataComments: data,
        isFetchingCommentsPhoto: false,
      }
    case REQUEST_SEND_PHOTO_COMMENT:
      return {
        ...state,
        isSendingComment: true,
      }
    case SUCCESS_SEND_PHOTO_COMMENT:
      return {
        ...state,
        isSendingComment: false,
      }
    case SELECT_PHOTO:
      return {
        ...state,
        id: id,
      }
    case ERROR:
      return {
        ...state,
        returnError: true,
      }
    default:
      return {
        ...state,
      }
  }
}
