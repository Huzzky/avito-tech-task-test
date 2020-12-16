import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import ModalPhoto from './ModalPhoto'
import ModalInputForm from './ModalInputForm'
import ModalComments from './ModalComments'
import BtnCloseModal from './BtnCloseModal'

const ModalWindow = ({ selectPhoto, data }) => {
  console.log(data)
  return (
    <div>
      <BtnCloseModal />
      <div>
        <div>
          <ModalPhoto />
          {/* <ModalInputForm /> */}
        </div>
        <div>
          <ModalComments />
        </div>
      </div>
    </div>
  )
}

ModalWindow.propTypes = {
  selectPhoto: PropTypes.func,
}
const mapStoreToProps = (store) => {
  return {
    data: store.PhotoAppReducer.dataComments,
  }
}

export default connect(mapStoreToProps)(ModalWindow)
