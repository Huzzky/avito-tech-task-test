import { REQUEST_PHOTOS, SUCCESS_PHOTOS, ERROR_PHOTOS } from '../const'

const initialState = {
  isFetchingPhotos: false,
  isFetchingCommentsPhoto: false,
  returnError: false,
  dataPhotos: [],
  dataComments: [],
  id: 0,
}

export default function PhotoAppReducer(state = initialState, { type, data }) {
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
    default:
      return {
        ...state,
      }
  }
}
