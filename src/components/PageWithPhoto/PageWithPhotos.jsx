import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PhotosGrid from './PhotosGrid/PhotosGrid'
import ModalLoader from './Modal/ModalLoader'

const PageWithPhotos = ({ isFetchingPhotos, returnError, id }) => {
  return isFetchingPhotos ? (
    <h1>Загрузка...</h1>
  ) : returnError ? (
    <h1>Ошибка 404</h1>
  ) : (
    <>
      {id === 0 ? <></> : <ModalLoader />}
      <PhotosGrid />
    </>
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
    id: store.PhotoAppReducer.id,
  }
}

export default connect(mapStateToProps)(PageWithPhotos)
