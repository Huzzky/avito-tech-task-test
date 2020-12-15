import { REQUEST_PHOTOS, SUCCESS_PHOTOS, ERROR_PHOTOS } from '../const'
import { fetchData } from '../../APIRequests'

const getPhotosFromApi = () => {
  return (dispatch) => {
    dispatch({
      type: REQUEST_PHOTOS,
    })
    fetchData()
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
