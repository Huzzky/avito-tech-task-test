import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const ModalInputForm = () => {
  return (
    <div>
      <form className="modal__form-comments form-comments">
        <input
          className="form-comments__input-form"
          type="text"
          placeholder="Ваше имя"
        />
        <input
          className="form-comments__input-form input-form--txt-comment-send"
          type="text"
          placeholder="Ваш комментарий"
        />
        <input
          className="form-comments__input-form--btn-send"
          type="submit"
          value="Оставить комментарий"
        />
      </form>
    </div>
  )
}

ModalInputForm.propTypes = {}

const mapDispatchToProps = {}

export default connect(null, mapDispatchToProps)(ModalInputForm)
