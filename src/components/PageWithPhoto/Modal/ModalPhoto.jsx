import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './styles/_modal.scss'

const ModalPhoto = ({ url }) => {
  return (
    <div className="modal__photo">
      <img src={url} alt="Modal_photo"></img>
    </div>
  )
}

ModalPhoto.propTypes = {
  urlPhotoForModal: PropTypes.object,
}

const mapStoreToProps = (store) => {
  return {
    url: store.PhotoAppReducer.dataComments.url,
  }
}

export default connect(mapStoreToProps)(ModalPhoto)
