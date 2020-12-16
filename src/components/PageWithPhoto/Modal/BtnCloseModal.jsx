import * as React from 'react'
import { connect } from 'react-redux'
import { selectPhoto } from '../../../store/acitions/selectImage'

function BtnCloseModal({ selectPhoto }) {
  return (
    <div
      onClick={() => {
        selectPhoto(0)
      }}
    >
      <span>X</span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  selectPhoto: (id) => dispatch(selectPhoto(id)),
})
export default connect(null, mapDispatchToProps)(BtnCloseModal)
