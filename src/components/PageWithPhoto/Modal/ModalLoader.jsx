import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCommentsPhotoForApi } from '../../../store/acitions/getAPI/getCommentsPhotoFromApi'
import ModalWindow from './ModalWindow'

const ModalLoader = ({
  isFetchingCommentsPhoto,
  returnError,
  id,
  getCommentAndPhoto,
  dataComments,
}) => {
  console.log(dataComments)
  useEffect(() => {
    getCommentAndPhoto(id)
  }, [getCommentAndPhoto, id])

  return isFetchingCommentsPhoto ? (
    <h1>Загрузка</h1>
  ) : returnError ? (
    <h1>Ошибка сети</h1>
  ) : Object.keys(dataComments).length > 0 ? (
    <>
      <ModalWindow />
    </>
  ) : (
    <h1>Подзагрузка</h1>
  )
}

ModalLoader.propTypes = {
  getCommentAndPhoto: PropTypes.func,
  id: PropTypes.number,
  isFetchingCommentsPhoto: PropTypes.bool,
  returnError: PropTypes.bool,
}

const mapStoreToProps = (store) => {
  return {
    isFetchingCommentsPhoto: store.PhotoAppReducer.isFetchingCommentsPhoto,
    returnError: store.PhotoAppReducer.returnError,
    id: store.PhotoAppReducer.id,
    dataComments: store.PhotoAppReducer.dataComments,
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCommentAndPhoto: (id) => dispatch(getCommentsPhotoForApi(id)),
})

export default connect(mapStoreToProps, mapDispatchToProps)(ModalLoader)
