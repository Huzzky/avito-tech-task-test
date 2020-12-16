import {
  REQUEST_PHOTOS,
  SUCCESS_PHOTOS,
  ERROR_PHOTOS,
  SELECT_PHOTO,
  REQUEST_PHOTO_COMMENT,
  SUCCESS_PHOTO_COMMENT,
  ERROR_PHOTO_COMMENT,
} from '../const'

const initialState = {
  isFetchingPhotos: false,
  isFetchingCommentsPhoto: false,
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
    case ERROR_PHOTOS:
      return {
        ...state,
        returnError: true,
      }
    case SELECT_PHOTO:
      return {
        ...state,
        id: id,
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
    case ERROR_PHOTO_COMMENT:
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
