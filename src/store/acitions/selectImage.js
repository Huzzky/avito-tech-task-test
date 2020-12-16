import { SELECT_PHOTO } from '../const'

const selectPhoto = (id) => {
  return (dispatch) => {
    dispatch({
      type: SELECT_PHOTO,
      id,
    })
  }
}

export { selectPhoto }
