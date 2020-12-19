import React, { useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCommentsPhotoForApi } from '../../../store/acitions/getAPI/getCommentsPhotoFromApi'
import ModalWindow from './ModalWindow'
import { selectPhoto } from '../../../store/acitions/selectImage'
import { postNewCommentUnderPhoto } from '../../../store/acitions/postNewCommentUnderPhoto'

const ModalLoader = ({
  isFetchingCommentsPhoto,
  returnError,
  id,
  getCommentAndPhoto,
  dataComments,
  closeModal,
  testfunc,
}) => {
  console.log(dataComments)
  useLayoutEffect(() => {
    getCommentAndPhoto(id)
    testfunc(237, { okey: 'okey' })
  }, [getCommentAndPhoto, id])

  return (
    <div className="modal">
      <div className="modal__bg" onClick={() => closeModal()} />
      <div className="modal__wrap">
        {isFetchingCommentsPhoto ? (
          <h1>Загрузка</h1>
        ) : returnError ? (
          <h1>Ошибка сети</h1>
        ) : Object.keys(dataComments).length > 0 ? (
          <>
            <ModalWindow />
          </>
        ) : (
          <h1>Подзагрузка</h1>
        )}
      </div>
    </div>
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
  closeModal: (id) => dispatch(selectPhoto(0)),
  testfunc: (id, object) => dispatch(postNewCommentUnderPhoto(id, object)),
})

export default connect(mapStoreToProps, mapDispatchToProps)(ModalLoader)
