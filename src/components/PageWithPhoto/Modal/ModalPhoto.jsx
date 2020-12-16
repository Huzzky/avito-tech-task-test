import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ModalPhoto = ({ url }) => {
  return <img src={url} alt="Modal_photo"></img>
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
