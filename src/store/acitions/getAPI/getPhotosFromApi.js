import { REQUEST_PHOTOS, SUCCESS_PHOTOS, ERROR_PHOTOS } from '../../const'
import { fetchDataPhotos } from '../../../APIRequests'

const getPhotosFromApi = () => {
  return (dispatch) => {
    dispatch({
      type: REQUEST_PHOTOS,
    })
    fetchDataPhotos()
      .then((data) => {
        dispatch({
          type: SUCCESS_PHOTOS,
          data,
        })
      })
      .catch((_) => {
        dispatch({
          type: ERROR_PHOTOS,
        })
      })
  }
}

export { getPhotosFromApi }
