import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { postNewCommentUnderPhoto } from '../../../store/acitions/postNewCommentUnderPhoto'

const ModalInputForm = ({ sendNewCommentFromUser, selectedImage }) => {
  const [nameUser, setNameUser] = useState('')
  const [commentUser, setCommentUser] = useState('')
  return (
    <div>
      <form className="modal__form-comments form-comments">
        <input
          className="form-comments__input-form"
          type="text"
          placeholder="Ваше имя"
          onChange={(e) => setNameUser(e.currentTarget.value)}
        />
        <input
          className="form-comments__input-form input-form--txt-comment-send"
          type="text"
          placeholder="Ваш комментарий"
          onChange={(e) => setCommentUser(e.currentTarget.value)}
        />
        <input
          className="form-comments__input-form--btn-send"
          type="submit"
          value="Оставить комментарий"
          disabled={nameUser === '' && commentUser === '' ? 'disabled' : ''}
          onClick={(e) => {
            e.preventDefault()
            if (nameUser !== '' && commentUser !== '') {
              sendNewCommentFromUser(selectedImage, {
                name: nameUser,
                comment: commentUser,
              })
            }
          }}
        />
      </form>
    </div>
  )
}

ModalInputForm.propTypes = {
  selectedImage: PropTypes.number.isRequired,
  sendNewCommentFromUser: PropTypes.func,
}

const mapStoreToProps = (store) => {
  return {
    selectedImage: store.PhotoAppReducer.id,
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendNewCommentFromUser: (id, object) =>
    dispatch(postNewCommentUnderPhoto(id, object)),
})

export default connect(mapStoreToProps, mapDispatchToProps)(ModalInputForm)
