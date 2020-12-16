import React, { useEffect, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCommentsPhotoForApi } from '../../../store/acitions/getAPI/getCommentsPhotoFromApi'
import { ModalWithComments } from './ModalWithComments'

const ModalLoader = ({
  isFetchingCommentsPhoto,
  returnError,
  id,
  dataComments,
}) => {
  useLayoutEffect(() => {
    getCommentsPhotoForApi(id)
    console.log(id)
  })
  useEffect(() => {
    console.log('Было что-то')
  }, [dataComments])

  return isFetchingCommentsPhoto ? (
    <h1>Загрузка комментариев</h1>
  ) : returnError ? (
    <h1>Ошибка загрузки</h1>
  ) : (
    <ModalWithComments />
  )
}

ModalLoader.propTypes = {
  id: PropTypes.any,
  isFetchingCommentsPhoto: PropTypes.any,
  returnError: PropTypes.any,
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
