import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ModalPhoto = ({ url }) => {
  return (
    <div className="block-form__block_photo">
      <div className="block-form__photo">
        <img src={url} alt="Modal_photo"></img>
      </div>
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
