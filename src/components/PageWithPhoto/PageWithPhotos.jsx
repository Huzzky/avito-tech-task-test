import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PhotosGrid from './PhotosGrid/PhotosGrid'

const PageWithPhotos = ({ isFetchingPhotos, returnError, idSelectedPhoto }) => {
  return isFetchingPhotos ? (
    <h1>Загрузка...</h1>
  ) : returnError ? (
    <h1>Ошибка 404</h1>
  ) : (
    <PhotosGrid />
  )
}

PageWithPhotos.propTypes = {
  isFetchingPhotos: PropTypes.bool.isRequired,
  returnError: PropTypes.bool.isRequired,
}

const mapStateToProps = (store) => {
  return {
    isFetchingPhotos: store.PhotoAppReducer.isFetchingPhotos,
    returnError: store.PhotoAppReducer.returnError,
    idSelectedPhoto: store.PhotoAppReducer.id,
  }
}

export default connect(mapStateToProps)(PageWithPhotos)
